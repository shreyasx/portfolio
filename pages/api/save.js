import initDB from "../../helpers/mongo";
import Donation from "../../models/Donation";
initDB();

export default async function save(req, res) {
	if (req.method == "POST") {
		try {
			const { data } = req.body;
			const rec = new Donation(data);
			await rec.save();
			res.json({ success: true });
		} catch (e) {
			console.log(e);
			res.json({ success: false });
		}
	}
}
