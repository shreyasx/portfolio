import axios from "axios";
import Head from "next/head";
import baseUrl from "../helpers/api";

const Donations = ({ donations }) => {
	console.log(donations);
	return (
		<>
			<Head>
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
					integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
				></link>
			</Head>
			{donations.map((donation, index) => {
				return (
					<div key={index} className="accordion" id="accordionExample">
						<div className="card">
							<div className="card-header" id={`heading${index}`}>
								<h5 className="mb-0">
									<button
										className="btn btn-link collapsed"
										type="button"
										data-toggle="collapse"
										data-target={`#collapse${index}`}
										aria-expanded="false"
										aria-controls={`collapse${index}`}
									>
										From: {donation.name}, Rs. {sub.amount.toString()}
									</button>
								</h5>
							</div>
							<div
								id={`collapse${index}`}
								className="collapse"
								aria-labelledby={`heading${index}`}
								data-parent="#accordionExample"
							>
								<div className="card-body">
									Email: {donation.email} <br />
									Date: {donation.date} <br />
									Comments:{` `} <br />
									<span style="white-space: pre-wrap;">
										{donation.comments}
									</span>
									<br />
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default Donations;

export async function getServerSideProps(ctx) {
	const cookie = ctx.req?.headers?.cookie;
	if (!cookie) return { redirect: { permanent: false, destination: "/" } };
	try {
		const resp = await axios.get(`${baseUrl}/api/donations`, {
			headers: { cookie },
		});
		return { props: { donations: resp.data } };
	} catch (err) {
		console.log(err);
		return { redirect: { permanent: false, destination: "/" } };
	}
}
