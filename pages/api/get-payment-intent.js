const stripe = require("stripe")(process.env.STRIPE_SECRET);

export default async function checkout(req, res) {
	if (req.method == "POST") {
		const { amount } = req.body;
		if (!amount) return res.json({ success: false });
		try {
			const paymentIntent = await stripe.paymentIntents.create({
				amount: amount,
				currency: "inr",
				automatic_payment_methods: { enabled: true },
			});
			res.json({ clientSecret: paymentIntent.client_secret, success: true });
		} catch (e) {
			console.log(e);
			res.json({ success: false });
		}
	}
}
