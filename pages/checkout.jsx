import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
	"pk_test_51IBXOSJZ5SfvqGzXiCyNg9KYR752jDXw1VmT0ZZJk4TtGnh0uioNCnLYWj1RMLPExNgyc5Py80yvr5zprsFQCdTp00MgYD5aGu"
);

export default function App() {
	const amount = JSON.parse(sessionStorage.getItem("data")).amount;
	const [clientSecret, setClientSecret] = useState("");
	useEffect(() => {
		// Create PaymentIntent as soon as the page loads
		fetch("api/get-payment-intent", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ amount }),
		})
			.then(res => res.json())
			.then(data => setClientSecret(data.clientSecret));
	}, []);

	const appearance = {
		theme: "stripe",
	};
	const options = {
		clientSecret,
		appearance,
	};

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
					<h1>{`Payment of Rs. ${amount}`}</h1>
					<Elements options={options} stripe={stripePromise}>
						<CheckoutForm />
					</Elements>
				</>
			)}
		</div>
	);
}
