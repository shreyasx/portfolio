import initDB from "../../helpers/mongo";
const Record = require("../../models/record");

initDB();

export default async function save(req, res) {
	if (req.method == "POST") {
		try {
			const rec = new Record(req.body);
			await rec.save();
			res.json({ success: true });
		} catch (e) {
			console.log(e);
			res.json({ success: false });
		}
	}
}
