import axios from "axios";
import baseUrl from "../helpers/api";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import React from "react";

const Donations = () => {
	const router = useRouter();
	const [donations, setDonations] = React.useState([]);

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
				const resp = await axios.get(`${baseUrl}/api/donations`);
				setDonations(resp.data);
			} catch (e) {
				router.push({ pathname: "/admin" });
			}
		})();
	}, [router]);

	return (
		<>
			<Head>
				<title>Donations</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div
				style={{
					maxWidth: "800px",
					margin: "0 auto",
					fontFamily: "sans-serif",
				}}
			>
				<h1>Donations made</h1>
				{donations.map((donation, index) => (
					<div
						style={{
							borderBottom: "3px solid black",
							padding: 10,
						}}
						key={index}
					>
						<span style={{ padding: "5px 0", display: "block" }}>
							<strong>From:</strong> {`${donation.name} (${donation.email})`}
						</span>
						<span style={{ padding: "5px 0", display: "block" }}>
							<strong>Amount:</strong> {`Rs. ${donation.amount}`}
						</span>
						<span style={{ padding: "5px 0", display: "block" }}>
							<strong>When:</strong> {donation.date}
						</span>
						{donation.comments !== "" && (
							<span style={{ padding: "5px 0", display: "block" }}>
								<strong>Comments:</strong>{" "}
								<span style={{ whiteSpace: "pre-wrap" }}>
									{donation.comments}
								</span>
							</span>
						)}
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
					<button onClick={() => router.push({ pathname: "/submissions" })}>
						View Submissions
					</button>
				</div>
			</div>
		</>
	);
};

export default Donations;
