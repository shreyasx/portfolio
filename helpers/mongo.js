import mongoose from "mongoose";

function initDB() {
	if (mongoose.connections[0].readyState) {
		console.info("Already connected.");
		return;
	}
	mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	mongoose.connection.on("connected", () => {
		console.info("Connected to MongoDB.");
	});
	mongoose.connection.on("error", err => {
		console.error("Error connecting to MongoDB,", err);
	});
}

export default initDB;
