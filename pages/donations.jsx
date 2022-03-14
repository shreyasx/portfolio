import axios from "axios";
import baseUrl from "../helpers/api";
import Head from "next/head";

const Donations = ({ donations }) => {
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
			</div>
		</>
	);
};

export default Donations;

export async function getServerSideProps(ctx) {
	const cookie = ctx.req?.headers?.cookie;
	const headers = { cookie };
	if (!cookie) return { redirect: { permanent: false, destination: "/" } };
	try {
		const resp = await axios.get(`${baseUrl}/api/donations`, { headers });
		return { props: { donations: resp.data } };
	} catch (err) {
		console.log(err);
		return { redirect: { permanent: false, destination: "/" } };
	}
}
