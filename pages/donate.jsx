import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

const Donate = () => {
	const router = useRouter();
	const [amount, setAmount] = React.useState(0);
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [comments, setComments] = React.useState("");
	const [error, setError] = React.useState("");

	const handleSubmit = () => {
		if (name === "" && email === "") {
			setError(
				"Ensure all required fields are filled correctly before proceeding."
			);
		} else if (amount / 100 < 50) {
			setError("Amount must be at least 50 Rupees.");
		} else {
			sessionStorage.setItem(
				"data",
				JSON.stringify({ name, email, comments, amount })
			);
			router.push({ pathname: "/checkout" });
		}
	};

	return (
		<>
			<Head>
				<title>Donations</title>
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
				method="post"
			>
				<div className="form-all">
					<ul className="form-section page-section">
						<li id="cid_28" className="form-input-wide">
							<div className="form-header-group  header-large">
								<div className="header-text httal htvam">
									<h1 id="header_28" className="form-header">
										Donation Form
									</h1>
								</div>
							</div>
						</li>
						<li className="form-line jf-required" id="id_29">
							<label
								className="form-label form-label-top"
								id="label_29"
								htmlFor="first_29"
							>
								Name
								<span className="form-required">*</span>
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
											id="first_29"
											className="form-textbox validate[required]"
											size="10"
											onChange={e => {
												setName(e.target.value);
											}}
										/>
										<label
											className="form-sub-label"
											htmlFor="first_29"
											id="sublabel_29_first"
											style={{ minHeight: "13px" }}
											aria-hidden="false"
										>
											Please enter your full name.
										</label>
									</span>
								</div>
							</div>
						</li>
						<li
							className="form-line jf-required"
							data-type="control_email"
							id="id_30"
						>
							<label
								className="form-label form-label-top"
								id="label_30"
								htmlFor="input_30"
							>
								Email
								<span className="form-required">*</span>
							</label>
							<div
								id="cid_30"
								className="form-input-wide jf-required"
								data-layout="half"
							>
								<span
									className="form-sub-label-container"
									style={{ verticalAlign: "top" }}
								>
									<input
										type="email"
										id="input_30"
										className="form-textbox validate[required, Email]"
										style={{ width: "310px" }}
										size="310"
										onChange={e => {
											setEmail(e.target.value);
										}}
										placeholder="ex: myname@example.com"
									/>
								</span>
							</div>
						</li>
						<li
							className="form-line jf-required"
							data-type="control_textarea"
							id="id_33"
						>
							<label
								className="form-label form-label-top form-label-auto"
								id="label_33"
								htmlFor="input_33"
							>
								Comments{" "}
								<span style={{ fontWeight: 200, fontSize: "0.85em" }}>
									(optional)
								</span>
							</label>
							<div
								id="cid_33"
								className="form-input-wide jf-required"
								data-layout="full"
							>
								<textarea
									id="input_33"
									className="form-textarea validate[required]"
									style={{ width: "648px", height: "163px" }}
									onChange={e => {
										setComments(e.target.value);
									}}
								></textarea>
							</div>
						</li>
						<li
							className="form-line jf-required"
							data-type="control_paypalcomplete"
							id="id_37"
							data-payment="true"
						>
							<label
								className="form-label form-label-top"
								id="label_37"
								htmlFor="input_37"
							>
								Donation Amount{" "}
								<span style={{ fontWeight: 200, fontSize: "0.85em" }}>
									(in INR)
								</span>
								<span className="form-required">*</span>
							</label>
							<div
								id="cid_37"
								className="form-input-wide jf-required"
								data-layout="full"
							>
								<span
									className="form-sub-label-container"
									style={{ verticalAlign: "top" }}
								>
									<input
										type="number"
										className="form-textbox validate[required, Numeric]"
										id="input_37_donation"
										onChange={e => {
											setAmount(parseInt(e.target.value) * 100);
										}}
									/>
									<label
										className="form-sub-label"
										htmlFor="input_37_donation"
										style={{ minHeight: "13px" }}
									>
										{`Make sure it's more than Rs. 50 :)`}
									</label>
								</span>
							</div>
						</li>
						<li className="form-line" data-type="control_button" id="id_14">
							{error && (
								<p style={{ color: "red", width: "100%", textAlign: "center" }}>
									{error}
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
										{`Go to the payment page ->`}
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

export default Donate;
