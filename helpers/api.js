const baseUrl =
	process.env.NODE_ENV === "production"
		? "https://shreyasjamkhandi.tech/"
		: "http://localhost:3000";

export default baseUrl;
