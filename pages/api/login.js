import { sign } from "jsonwebtoken";
import cookie from "cookie";

export default function login(req, res) {
	if (req.method == "POST") {
		const { username, password } = req.body;
		if (username === process.env.USERNAME && password === process.env.PASS) {
			const jwt = sign({ id: "Truely Shrey." }, process.env.JWT_SECRET, {
				expiresIn: "1h",
			});
			res
				.setHeader(
					"Set-Cookie",
					cookie.serialize("authToken", jwt, {
						httpOnly: true,
						secure: process.env.NODE_ENV !== "development",
						sameSite: true,
						maxAge: 3600,
						path: "/",
					})
				)
				.end();
		} else {
			res.status(400).end();
		}
	}
}
