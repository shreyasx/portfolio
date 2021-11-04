import Head from "next/head";
// import "../public/home.css";
// import "../public/index.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta
					name="description"
					content="Hardcore Full-Stack JavaScript Web Developer"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
