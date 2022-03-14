import Submission from "../../models/Submission";
import initDB from "../../helpers/mongo";
// import authenticated from "../../middlewares/auth";

initDB();

// export default authenticated(async function (req, res) {
// 	if (req.method == "POST") {
// 		try {
// 			const data = await Submission.find();
// 			res.json(data);
// 		} catch (e) {
// 			console.log(e);
// 			res.status(400).end();
// 		}
// 	}
// });

export default async function save(req, res) {
	if (req.method == "POST") {
		try {
			const data = await Submission.find();
			res.json(data);
		} catch (e) {
			console.log(e);
			res.status(400).end();
		}
	}
}
