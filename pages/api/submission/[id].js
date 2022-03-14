import Submission from "../../../models/Submission";
import initDB from "../../../helpers/mongo";

initDB();

export default async function del(req, res) {
	if (req.method == "DELETE") {
		try {
			console.log(await Submission.deleteOne({ _id: req.query.id }));
			res.status(200).end();
		} catch (e) {
			res.status(400).end();
		}
	}
}
