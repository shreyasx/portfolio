import Donation from "../../models/Donation";
import initDB from "../../helpers/mongo";
import authenticated from "../../middlewares/auth";

initDB();

export default authenticated(async function save(req, res) {
	if (req.method == "POST") {
		try {
			const data = await Donation.find();
			res.json(data);
		} catch (e) {
			console.log(e);
			res.status(400).end();
		}
	}
});
