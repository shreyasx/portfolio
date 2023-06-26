const baseUrl =
	process.env.NODE_ENV === "production"
		? "https://shreyasx.netlify.app"
		: "http://localhost:3000";

export default baseUrl;
