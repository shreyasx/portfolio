import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta
					name="description"
					content="Hardcore Full-Stack JavaScript Web Dev."
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
