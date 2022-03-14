import Submission from "../../models/Submission";
import initDB from "../../helpers/mongo";
import { authenticated } from "../../middlewares/auth";

initDB();

export default authenticated(async function fn(req, res) {
	if (req.method == "GET") {
		try {
			const data = await Submission.find();
			res.json(data);
		} catch (e) {
			console.log(e);
			res.status(400).end();
		}
	}
});
