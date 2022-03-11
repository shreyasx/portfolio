const mongoose = require("mongoose");

const RecordSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true },
		amount: { type: Number, required: true },
		comments: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Record", RecordSchema);
