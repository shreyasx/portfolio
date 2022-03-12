import initDB from "../../helpers/mongo";
import mongoose from "mongoose";
initDB();

const recordSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true },
		amount: { type: Number, required: true },
		comments: { type: String, default: "" },
		date: { type: String, default: getTime() },
	},
	{ timestamps: true }
);
const Record = mongoose.models.Record || mongoose.model("Record", recordSchema);

export default async function save(req, res) {
	if (req.method == "POST") {
		try {
			const { data } = req.body;
			const rec = new Record(data);
			await rec.save();
			res.json({ success: true });
		} catch (e) {
			console.log(e);
			res.json({ success: false });
		}
	}
}

function getTime() {
	const currentTime = new Date();
	const currentOffset = currentTime.getTimezoneOffset();
	const ISTOffset = 330;
	const ISTTime = new Date(
		currentTime.getTime() + (ISTOffset + currentOffset) * 60000
	);
	return ISTTime;
}
