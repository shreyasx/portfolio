const stripe = require("stripe")(process.env.STRIPE_SECRET);

export default async function checkout(req, res) {
	if (req.method == "POST") {
		let success;
		const { amount } = req.body;
		try {
			const paymentIntent = await stripe.paymentIntents.create({
				amount: amount,
				currency: "inr",
				automatic_payment_methods: { enabled: true },
			});
			res.json({ clientSecret: paymentIntent.client_secret });
		} catch (e) {
			console.log(e);
			success = false;
			res.json({ success });
		}
	}
}
