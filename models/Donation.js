import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true },
		amount: { type: Number, required: true },
		comments: { type: String, default: "" },
		date: { type: String, default: getTime() },
	},
	{ timestamps: true }
);

function getTime() {
	const currentTime = new Date();
	const currentOffset = currentTime.getTimezoneOffset();
	const ISTOffset = 330;
	const ISTTime = new Date(
		currentTime.getTime() + (ISTOffset + currentOffset) * 60000
	)
		.toGMTString()
		.split(" G")[0];
	return ISTTime;
}

export default mongoose.models.Donation ||
	mongoose.model("Donation", donationSchema);