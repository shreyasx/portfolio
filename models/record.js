import mongoose from "mongoose";

const recordSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true },
		amount: { type: Number, required: true },
		comments: { type: String, default: "" },
	},
	{ timestamps: true }
);

export default mongoose.models.Record || mongoose.model("Record", recordSchema);
