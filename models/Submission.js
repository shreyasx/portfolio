import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		subject: { type: String, required: true },
		email: { type: String, required: true },
		message: { type: String, required: true },
		date: { type: String, required: true },
	},
	{ timestamps: false }
);

export default mongoose.models.Submission ||
	mongoose.model("Submission", submissionSchema);
