import { serialize } from "cookie";

export default async function logout(req, res) {
	if (req.method == "GET") {
		try {
			res.setHeader("Set-Cookie", [
				serialize("authToken", "", {
					maxAge: -1,
					path: "/",
				}),
			]);
			res.writeHead(302, { Location: "/" });
			res.end();
		} catch (e) {
			console.log(e);
			res.status(500).end();
		}
	}
}
