import React, { useEffect, useState } from "react";
import baseUrl from "../helpers/api";
import Image from "next/image";
import loading from "../public/images/loading.gif";
import {
	PaymentElement,
	useStripe,
	useElements,
} from "@stripe/react-stripe-js";

export default function CheckoutForm() {
	const stripe = useStripe();
	const elements = useElements();
	const [message, setMessage] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (!stripe || !clientSecret) return;
		const clientSecret = new URLSearchParams(window.location.search).get(
			"payment_intent_client_secret"
		);

		stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
			switch (paymentIntent.status) {
				case "succeeded":
					setMessage("Payment succeeded!");
					sessionStorage.removeItem("data");
					break;
				case "processing":
					setMessage("Your payment is processing.");
					break;
				case "requires_payment_method":
					setMessage("Your payment was not successful, please try again.");
					break;
				default:
					setMessage("Something went wrong.");
					break;
			}
		});
	}, [stripe]);

	const handleSubmit = async e => {
		e.preventDefault();
		if (!stripe || !elements) return;
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
		<form
			style={{ textAlign: "center" }}
			id="payment-form"
			onSubmit={isLoading ? () => {} : handleSubmit}
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
	);
}
