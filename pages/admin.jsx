import axios from "axios";
import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import baseUrl from "../helpers/api";

const Admin = () => {
	const [username, setName] = React.useState("");
	const [password, setPass] = React.useState("");
	const [error, setError] = React.useState(false);
	const [choice, setChoice] = React.useState("submissions");
	const router = useRouter();

	const handleSubmit = async () => {
		try {
			setError(false);
			await axios.post(`${baseUrl}/api/login`, { username, password });
			router.push({ pathname: `/${choice}` });
		} catch (e) {
			console.log(e);
			setError(true);
		}
	};

	return (
		<>
			<Head>
				<title>Admin Login</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="/donate.css" />
				<link
					type="text/css"
					rel="stylesheet"
					href="https://cdn01.jotfor.ms/themes/CSS/5e6b428acc8c4e222d1beb91.css?themeRevisionID=5f7ed99c2c2c7240ba580251"
				/>
				<link
					type="text/css"
					rel="stylesheet"
					href="https://cdn02.jotfor.ms/css/styles/payment/payment_styles.css?3.3.31704"
				/>
				<link
					type="text/css"
					rel="stylesheet"
					href="https://cdn03.jotfor.ms/css/styles/payment/payment_feature.css?3.3.31704"
				/>
			</Head>
			<form
				className="jotform-form"
				onSubmit={event => {
					event.preventDefault();
				}}
			>
				<div className="form-all">
					<ul className="form-section page-section">
						<li id="cid_28" className="form-input-wide">
							<div className="form-header-group  header-large">
								<div className="header-text httal htvam">
									<h1 id="header_28" className="form-header">
										Login page for Shreyas.
									</h1>
								</div>
							</div>
						</li>
						<li className="form-line jf-required" id="id_29">
							<label
								className="form-label form-label-top"
								id="label_29"
								htmlFor="first_29-1"
							>
								Username
							</label>
							<div
								id="cid_29"
								className="form-input-wide jf-required"
								data-layout="full"
							>
								<div>
									<span
										className="form-sub-label-container"
										style={{ verticalAlign: "top" }}
										data-input-type="first"
									>
										<input
											type="text"
											id="first_29-1"
											className="form-textbox validate[required]"
											size="10"
											onChange={e => {
												setName(e.target.value);
											}}
										/>
									</span>
								</div>
							</div>
						</li>
						<li className="form-line jf-required" id="id_29">
							<label
								className="form-label form-label-top"
								id="label_29"
								htmlFor="first_29-2"
							>
								Password
							</label>
							<div
								id="cid_29"
								className="form-input-wide jf-required"
								data-layout="full"
							>
								<div>
									<span
										className="form-sub-label-container"
										style={{ verticalAlign: "top" }}
										data-input-type="first"
									>
										<input
											type="password"
											id="first_29-2"
											className="form-textbox validate[required]"
											size="10"
											onChange={e => {
												setPass(e.target.value);
											}}
										/>
									</span>
								</div>
							</div>
						</li>
						<li
							style={{
								margin: "20px 0",
								justifyContent: "space-evenly",
								display: "flex",
								width: "100%",
							}}
						>
							<div>
								<input
									name="choice"
									style={{ marginRight: 8 }}
									defaultChecked={true}
									onChange={event => {
										if (event.target.checked) setChoice("submissions");
									}}
									type="radio"
									id="choice_s"
								/>
								<label htmlFor="choice_s">Submissions</label>
							</div>
							<div>
								<input
									name="choice"
									style={{ marginRight: 8 }}
									onChange={event => {
										if (event.target.checked) setChoice("donations");
									}}
									type="radio"
									id="choice_d"
								/>
								<label htmlFor="choice_d">Donations</label>
							</div>
						</li>
						<li className="form-line" data-type="control_button" id="id_14">
							{error && (
								<p style={{ color: "red", margin: "10px auto" }}>
									{`Incorrect credentials. Fuck off!`}
								</p>
							)}
							<div id="cid_14" className="form-input-wide" data-layout="full">
								<div
									data-align="auto"
									className="form-buttons-wrapper form-buttons-auto   jsTest-button-wrapperField"
								>
									<button
										onClick={handleSubmit}
										id="input_14"
										className="form-submit-button form-submit-button-simple_rose submit-button jf-form-buttons jsTest-submitField"
									>
										{`Login ->`}
									</button>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div className="formFooter-heightMask"></div>
			</form>
		</>
	);
};

export default Admin;

export async function getServerSideProps(ctx) {
	const cookie = ctx.req?.headers?.cookie;
	if (cookie.slice(0, 10) === "authToken=")
		return { redirect: { permanent: false, destination: "/submissions" } };
	else return { props: {} };
}
