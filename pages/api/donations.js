import Donation from "../../models/Donation";
import initDB from "../../helpers/mongo";
import { authenticated } from "../../helpers/auth";

initDB();

export default authenticated(async function fn(req, res) {
	if (req.method == "GET") {
		try {
			const data = await Donation.find();
			res.json(data);
		} catch (e) {
			console.log(e);
			res.status(400).end();
		}
	}
});
