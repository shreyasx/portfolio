import axios from "axios";
import baseUrl from "../helpers/api";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";

const handleDelete = async id => {
	try {
		await axios.delete(`${baseUrl}/api/submission/${id}`);
		window.location.reload();
	} catch (e) {
		console.log("Couldn't delete.");
	}
};

const Submissions = ({ subs }) => {
	const router = useRouter();

	const handleLogout = async () => {
		try {
			await axios.get(`${baseUrl}/api/logout`);
			router.push({ pathname: "/" });
		} catch (e) {
			console.log("Couldn't logout.");
		}
	};

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
							<strong>When:</strong> {sub.date}
						</span>
						<span style={{ padding: "5px 0", display: "block" }}>
							<strong>Subject:</strong> {sub.subject}
						</span>
						<span style={{ padding: "5px 0", display: "block" }}>
							<strong>Message:</strong>{" "}
							<span style={{ whiteSpace: "pre-wrap" }}>{sub.message}</span>
						</span>
						<span style={{ padding: "5px 0", display: "block" }}>
							<button onClick={() => handleDelete(sub._id)}>Delete</button>
						</span>
					</div>
				))}
				<div
					style={{
						display: "flex",
						justifyContent: "space-evenly",
						maxWidth: 500,
						margin: "20px auto",
					}}
				>
					<button onClick={handleLogout}>Logout</button>
					<button onClick={() => router.push({ pathname: "/donations" })}>
						View Donations
					</button>
				</div>
			</div>
		</>
	);
};

export default Submissions;

export async function getServerSideProps(ctx) {
	const cookie = ctx.req?.headers?.cookie;
	const headers = { cookie };
	if (!cookie) return { redirect: { permanent: false, destination: "/admin" } };
	try {
		const resp = await axios.get(`${baseUrl}/api/submissions`, { headers });
		return { props: { subs: resp.data } };
	} catch (err) {
		console.log(err);
		return { redirect: { permanent: false, destination: "/" } };
	}
}
