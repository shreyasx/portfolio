import nodemailer from "nodemailer";
import Submission from "../../models/Submission";
import initDB from "../../helpers/mongo";

initDB();

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.NODEMAILER_EMAIL,
		pass: process.env.NODEMAILER_PASS,
	},
});

export default async function save(req, res) {
	if (req.method == "POST") {
		try {
			const sub = new Submission(req.body);
			await sub.save();
			transporter.sendMail(
				{
					from: process.env.NODEMAILER_EMAIL,
					to: "shreyxs@gmail.com",
					subject: "Form Submitted",
					text: `You have a new form submission from shreyasjamkhandi.tech!\n\n${JSON.stringify(
						req.body,
						null,
						4
					)}`,
				},
				function (err, msg) {
					if (err) {
						console.log("send mail error -", err.message);
						res.status(400).json({ success: false });
					} else {
						console.log(`Sent notification sucessfully.`);
						res.status(200).json({ success: true });
					}
				}
			);
		} catch (e) {
			res.status(400).json({ success: false });
			console.log(e);
		}
	}
}
