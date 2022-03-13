import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import axios from "axios";
import baseUrl from "../helpers/api";
import { useRouter } from "next/router";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE);

export default function App() {
	const router = useRouter();
	let amount;
	if (typeof sessionStorage !== "undefined")
		amount = JSON.parse(sessionStorage.getItem("data"))?.amount;
	const [clientSecret, setClientSecret] = useState("");
	useEffect(() => {
		(async () => {
			const resp = await axios.post(`${baseUrl}/api/get-payment-intent`, {
				amount,
			});
			setClientSecret(resp.data.clientSecret);
		})();
	}, [amount]);

	const appearance = { theme: "stripe" };
	const options = { clientSecret, appearance };

	React.useEffect(() => {
		if (!amount) router.push({ pathname: "/checkout" });
	}, [amount, router]);

	return (
		<div
			style={{
				maxWidth: "800px",
				margin: "auto",
				padding: 45,
			}}
		>
			{clientSecret && (
				<>
					<h1>{`Payment of Rs. ${amount / 100}`}</h1>
					<Elements options={options} stripe={stripePromise}>
						<CheckoutForm />
					</Elements>
				</>
			)}
		</div>
	);
}
