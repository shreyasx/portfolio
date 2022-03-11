import { v4 as uuidv4 } from "uuid";
const stripe = require("stripe")(
	"sk_test_51IBXOSJZ5SfvqGzXBGfUKdVLckmTs6fiRob6N640tZROlXx9FJ8bgNYQjLXTtDTjmiQHB2UPhJoT84q7NZfqZsES00pE60groz"
);

export default async function checkout(req, res) {
	if (req.method == "POST") {
		let success;
		const { token, amount } = req.body;
		try {
			const customer = await stripe.customers.create({
				email: token.email,
				source: token.id,
			});
			const stripeOptions = {
				amount: amount * 100,
				currency: "inr",
				customer: customer.id,
				receipt_email: token.email,
				description: `Thank you for your donation!`,
				// shipping: {
				// 	name: token.card.name,
				// 	address: {
				// 		line1: token.card.address_line1,
				// 		line2: token.card.address_line2,
				// 		city: token.card.address_city,
				// 		country: token.card.address_country,
				// 		postal_code: token.card.address_zip,
				// 	},
				// },
			};
			const charge = await stripe.charges.create(stripeOptions, {
				idempotencyKey: uuidv4(),
			});
			console.log(charge);
			success = true;
			res.json({ success });
		} catch (e) {
			console.log(e);
			success = false;
			res.json({ success });
		}
	}
}
