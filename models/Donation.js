import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true },
		amount: { type: Number, required: true },
		comments: { type: String, default: "" },
		date: { type: String, required: true },
	},
	{ timestamps: false }
);

export default mongoose.models.Donation ||
	mongoose.model("Donation", donationSchema);
