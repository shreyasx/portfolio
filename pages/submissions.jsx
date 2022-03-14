import axios from "axios";
import baseUrl from "../helpers/api";
import Head from "next/head";

const Submissions = ({ subs }) => {
	return (
		<>
			<Head>
				<title>Submissions</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div
				style={{
					maxWidth: "800px",
					margin: "0 auto",
					fontFamily: "sans-serif",
				}}
			>
				<h1>Form submissions</h1>
				{subs.map((sub, index) => (
					<div
						style={{
							borderBottom: "3px solid black",
							padding: 10,
						}}
						key={index}
					>
						<span style={{ padding: "5px 0", display: "block" }}>
							<strong>From:</strong> {`${sub.name} (${sub.email})`}
						</span>
						<span style={{ padding: "5px 0", display: "block" }}>
							<strong>Subject:</strong> {sub.subject}
						</span>
						<span style={{ padding: "5px 0", display: "block" }}>
							<strong>Message:</strong>{" "}
							<span style={{ whiteSpace: "pre-wrap" }}>{sub.message}</span>
						</span>
						<span style={{ padding: "5px 0", display: "block" }}>
							<button>{`Delete ${sub._id}`}</button>
						</span>
					</div>
				))}
			</div>
		</>
	);
};

export default Submissions;

export async function getServerSideProps(ctx) {
	const cookie = ctx.req?.headers?.cookie;
	if (!cookie) return { redirect: { permanent: false, destination: "/" } };
	try {
		const resp = await axios.post(`${baseUrl}/api/submissions`, {
			headers: { cookie },
		});
		return { props: { subs: resp.data } };
	} catch (err) {
		console.log(err);
		return { redirect: { permanent: false, destination: "/" } };
	}
}
