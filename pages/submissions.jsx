import axios from "axios";
import Head from "next/head";
import baseUrl from "../helpers/api";

const Submissions = ({ subs }) => {
	return (
		<>
			{subs.map((sub, index) => {
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
										From: {sub.name}, on {sub.createdAt}
										<button className="btn btn-outline-danger">
											Delete permanently
										</button>
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
									Subject: {sub.subject} <br />
									Email: {sub.email} <br />
									Message:{" "}
									<span style={{ whiteSpace: "pre-wrap" }}>{sub.message}</span>
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

export default Submissions;

export async function getServerSideProps(ctx) {
	// const cookie = ctx.req?.headers?.cookie;
	// if (!cookie) return { redirect: { permanent: false, destination: "/" } };
	try {
		const resp = await axios.post(`${baseUrl}/api/submissions`, {
			// headers: { cookie },
		});
		return { props: { subs: resp.data } };
	} catch (err) {
		console.log(err);
		return { redirect: { permanent: false, destination: "/" } };
	}
}
