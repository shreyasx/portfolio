import React, { useEffect, useState } from "react";
import baseUrl from "../helpers/api";
import Image from "next/image";
import loading from "../public/images/loading.gif";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import { useRouter } from "next/router";
import {
	PaymentElement,
	useStripe,
	useElements,
} from "@stripe/react-stripe-js";

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CheckoutForm() {
	const router = useRouter();
	const stripe = useStripe();
	const elements = useElements();
	const [message, setMessage] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [open, setOpen] = React.useState(false);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") return;
		setOpen(false);
	};

	useEffect(() => {
		if (!stripe) return;

		const clientSecret = new URLSearchParams(window.location.search).get(
			"payment_intent_client_secret"
		);

		if (!clientSecret) return;

		const handleSucceeded = () => {
			const data = JSON.parse(sessionStorage.getItem("data"));
			data.amount /= 100;
			setOpen(true);
			axios.post(`${baseUrl}/api/save`, { data }).then(resp => {
				if (resp.data.success) sessionStorage.removeItem("data");
			});
			setTimeout(() => router.push("/home"), 2500);
		};

		stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
			switch (paymentIntent.status) {
				case "succeeded":
					handleSucceeded();
					break;
				case "processing":
					setMessage("Your payment is processing.");
					break;
				case "requires_payment_method":
					setMessage("Your payment was not successful, please try again.");
					break;
				default:
					setMessage(
						`Something's wrong. Check back later or contact shreyxs@gmail.com2`
					);
					break;
			}
		});
	}, [stripe, router]);

	const handleSubmit = async e => {
		e.preventDefault();
		if (!stripe || !elements) {
			setMessage(
				`Something's wrong. Check back later or contact shreyxs@gmail.com3`
			);
			return;
		}
		setIsLoading(true);

		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: { return_url: `${baseUrl}/checkout` },
		});

		if (error.type === "card_error" || error.type === "validation_error") {
			setMessage(error.message);
		} else {
			setMessage("An unexpected error occured.");
		}
		setIsLoading(false);
	};

	return (
		<>
			<Stack spacing={2} sx={{ width: "100%" }}>
				<Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
					<Alert
						onClose={handleClose}
						severity="success"
						sx={{ width: "100%" }}
					>
						{`Payment succeeded. Thanks a lot! ❤️`}
					</Alert>
				</Snackbar>
			</Stack>
			<form
				style={{ textAlign: "center" }}
				id="payment-form"
				onSubmit={
					isLoading
						? event => {
								event.preventDefault();
						  }
						: handleSubmit
				}
			>
				<PaymentElement id="payment-element" />
				<button
					style={{ margin: "35px 0", padding: "7px 10px" }}
					disabled={isLoading || !stripe || !elements}
					id="submit"
				>
					<span id="button-text">
						{isLoading ? (
							<Image alt="loading.." src={loading} height={20} width={20} />
						) : (
							"Pay now"
						)}
					</span>
				</button>
				{message && <div id="payment-message">{message}</div>}
			</form>
		</>
	);
}
