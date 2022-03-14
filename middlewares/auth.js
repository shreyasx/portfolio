import { verify } from "jsonwebtoken";

export const authenticated = fn => async (req, res) => {
	console.log("hi- ", req.cookies);
	if (req.cookies.authToken) {
		try {
			verify(req.cookies.authToken, process.env.JWT_SECRET);
			return await fn(req, res);
		} catch (err) {
			res.status(401).json({ message: "Unauthenticated." });
		}
	} else res.status(401).json({ message: "Unauthenticated." });
};
