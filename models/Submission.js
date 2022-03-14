import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		subject: { type: String, required: true },
		email: { type: String, required: true },
		message: { type: String, required: true },
		read: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

export default mongoose.models.Submission ||
	mongoose.model("Submission", submissionSchema);
