import initDB from "../../helpers/mongo";
import Donation from "../../models/Donation";
import moment from "moment-timezone";

initDB();

export default async function save(req, res) {
	if (req.method == "POST") {
		try {
			const { data } = req.body;
			const rec = new Donation({ ...data, date: getTime() });
			await rec.save();
			res.json({ success: true });
		} catch (e) {
			console.log(e);
			res.json({ success: false });
		}
	}
}

function getTime() {
	const date = moment().tz("Asia/Calcutta").format("MMMM Do YYYY, h:mm:ss a");
	return date;
}
