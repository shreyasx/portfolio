import axios from "axios";
import baseUrl from "../helpers/api";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import React from "react";

const handleDelete = async sub => {
	try {
		const confirm = window.confirm(`Delete submission from ${sub.name}?`);
		if (!confirm) return;
		await axios.delete(`${baseUrl}/api/submission/${sub._id}`);
		window.location.reload();
	} catch (e) {
		console.log("Couldn't delete.");
	}
};

const Submissions = () => {
	const router = useRouter();
	const [submissions, setSubmissons] = React.useState([]);

	const handleLogout = async () => {
		try {
			await axios.get(`${baseUrl}/api/logout`);
			router.push({ pathname: "/admin" });
		} catch (e) {
			console.log("Couldn't logout.");
		}
	};

	React.useEffect(() => {
		(async () => {
			try {
				const resp = await axios.get(`${baseUrl}/api/submissions`);
				setSubmissons(resp.data);
			} catch (e) {
				router.push({ pathname: "/admin" });
			}
		})();
	}, [router]);

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
				{submissions.map((sub, index) => (
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
							<span
								style={{ overflowWrap: "break-word", whiteSpace: "pre-wrap" }}
							>
								{sub.message}
							</span>
						</span>
						<span style={{ padding: "5px 0", display: "block" }}>
							<button onClick={() => handleDelete(sub)}>Delete</button>
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
