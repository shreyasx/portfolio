const stripe = require("stripe")(
	"sk_test_51IBXOSJZ5SfvqGzXBGfUKdVLckmTs6fiRob6N640tZROlXx9FJ8bgNYQjLXTtDTjmiQHB2UPhJoT84q7NZfqZsES00pE60groz"
);

export default async function checkout(req, res) {
	if (req.method == "POST") {
		let success;
		const { amount } = req.body;
		console.log(amount);
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
