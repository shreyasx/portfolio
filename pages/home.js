import Head from "next/head";
import React from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Home() {
	const [open, setOpen] = React.useState(false);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") return;
		setOpen(false);
		setTimeout(checkTheme, 1);
	};

	const checkTheme = () => {
		let theme = localStorage.getItem("theme");
		if (theme == null) {
			setTheme("blue");
		} else {
			setTheme(theme);
		}
		let themeDots = document.getElementsByClassName("theme-dot");
		for (var i = 0; themeDots.length > i; i++) {
			themeDots[i].addEventListener("click", function () {
				let mode = this.dataset.mode;
				setTheme(mode);
			});
		}
		function setTheme(mode) {
			if (mode == "light") {
				document.getElementById("theme-style").href = "/default.css";
			}
			if (mode == "blue") {
				document.getElementById("theme-style").href = "/blue.css";
			}
			if (mode == "green") {
				document.getElementById("theme-style").href = "/green.css";
			}
			if (mode == "purple") {
				document.getElementById("theme-style").href = "/purple.css";
			}
			localStorage.setItem("theme", mode);
		}
	};
	React.useEffect(() => {
		checkTheme();
		(async () => {
			try {
				await axios.get("https://form-submissions.herokuapp.com");
				console.log("Wake-up shot fired!");
			} catch (e) {
				console.error(e);
				console.log("Wake-up shot couldn't be fired!");
			}
		})();
	}, []);

	const onSubmit = async event => {
		event.preventDefault();
		const btn = document.getElementById("submit-btn");
		btn.value = "Loading...";
		const resp = await axios.post(
			"https://form-submissions.herokuapp.com/save",
			{
				name: document.getElementById("name").value,
				email: document.getElementById("email").value,
				subject: document.getElementById("subject").value,
				message: document.getElementById("message").value,
			}
		);
		btn.value = "Send";
		if (resp.data.success) {
			document.getElementById("name").value = null;
			document.getElementById("email").value = null;
			document.getElementById("subject").value = null;
			document.getElementById("message").value = null;
			setOpen(true);
			setTimeout(checkTheme, 1);
			setTimeout(checkTheme, 4001);
		}
	};

	return (
		<div>
			<Head>
				<title>Shreyas - Home</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="/home.css" />
				<link id="theme-style" rel="stylesheet" type="text/css" href="" />
			</Head>

			<Stack spacing={2} sx={{ width: "100%" }}>
				<Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
					<Alert
						onClose={handleClose}
						severity="success"
						sx={{ width: "100%" }}
					>
						Your form has been submitted!
					</Alert>
				</Snackbar>
			</Stack>

			<section className="s1">
				<div className="main-container">
					<div className="greeting-wrapper">
						<h1>Good to see you here!</h1>
					</div>
					<div className="intro-wrapper">
						<div className="nav-wrapper">
							<a href="#">
								<div className="dots-wrapper">
									<div id="dot-1" className="browser-dot"></div>
									<div id="dot-2" className="browser-dot"></div>
									<div id="dot-3" className="browser-dot"></div>
								</div>
							</a>
							<ul id="navigation">
								<li>
									<a href="#contact-form">Contact</a>
								</li>
							</ul>
						</div>
						<div className="left-column">
							<img alt="Shrey" id="profile_pic" src="/images/shrey.jpg" />
							<h5 style={{ textAlign: "center", lineHeight: 0 }}>
								Pick your Theme.
							</h5>
							<div id="theme-options-wrapper">
								<div
									data-mode="light"
									id="light-mode"
									className="theme-dot"
								></div>
								<div
									data-mode="blue"
									id="blue-mode"
									className="theme-dot"
								></div>
								<div
									data-mode="green"
									id="green-mode"
									className="theme-dot"
								></div>
								<div
									data-mode="purple"
									id="purple-mode"
									className="theme-dot"
								></div>
							</div>
							<p id="settings-note">
								Theme settings will be saved for
								<br />
								your next vist
							</p>
						</div>
						<div className="right-column">
							<div id="preview-shadow">
								<div id="preview">
									<div id="corner-tl" className="corner"></div>
									<div id="corner-tr" className="corner"></div>
									<h3>What I Am</h3>
									<p>
										A consistent LEARNER and a self-taught Full-Stack Web
										Developer.
									</p>
									<div id="corner-br" className="corner"></div>
									<div id="corner-bl" className="corner"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="s2">
				<div className="main-container">
					<div className="about-wrapper">
						<div className="about-me">
							<h4>More about me</h4>
							<p
								style={{
									textAlign: "justify",
									textJustify: "inter-word",
									lineHeight: 1.5,
									paddingBottom: 10,
								}}
							>
								One fine day around 2 years ago, I came across a small
								JavaScript code snippet. BOOM! From that moment, till now,
								I&apos;m always excited to learn more about it. I&apos;m a
								Full-Stack Web Developer who knows more than just JavaScript,
								and I spend most of my days coding. Apart from that I&apos;m an
								undergraduate in the department of Computer Science and
								Engineering.
							</p>
							<hr />
							<h4>TOP EXPERTISE</h4>
							<p>Full-Stack developer with primary focus on the MERN Stack.</p>
							<div id="skills">
								<ul>
									<li>ReactJS/Redux</li>
									<li>NextJS</li>
									<li>JavaScript</li>
									<li>HTML/CSS/jQuery</li>
									<li>PHP/Laravel</li>
								</ul>
								<ul>
									<li>NodeJS</li>
									<li>ExpressJS</li>
									<li>AWS (RDS/S3)</li>
									<li>MongoDB</li>
									<li>MySQL/PostgreSQL</li>
								</ul>
							</div>
						</div>
						<div className="social-links">
							<img alt="work" id="social_img" src="/images/work.webp" />
						</div>
					</div>
				</div>
			</section>
			<section className="s1">
				<div className="main-container">
					<h3 style={{ textAlign: "center" }}>Some of my past projects</h3>
					<div className="post-wrapper">
						<div>
							<div className="post">
								<img className="thumbnail" src="/images/xtreme.png" />
								<div className="post-preview">
									<h6 className="post-title">XTREME Gameshop</h6>
									<p className="post-intro">
										An ecommerce website that&apos;s built on the MERN stack and
										has all admin controls.
									</p>
									<a target="blank" href="https://xtremegameshop.netlify.app/">
										Visit now -&gt;
									</a>
								</div>
							</div>
						</div>
						<div>
							<div className="post">
								<img className="thumbnail" src="/images/logod.png" />
								<div className="post-preview">
									<h6 className="post-title">Logo Designer</h6>
									<p className="post-intro">
										Built and maintaining the website for a professional Logo
										Designer from Goa, India.
									</p>
									<a target="blank" href="https://logodesigner.vercel.app/">
										Visit now -&gt;
									</a>
								</div>
							</div>
						</div>
						<div>
							<div className="post">
								<img className="thumbnail" src="/images/rem.png" />
								<div className="post-preview">
									<h6 className="post-title">Reminders & Todos</h6>
									<p className="post-intro">
										A stylish Progressive Web App that sends out web push
										notifications and email reminders.{" "}
									</p>
									<a
										target="blank"
										href="https://remindersandtodos.netlify.app/"
									>
										Visit now -&gt;
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="s2">
				<div className="main-container">
					<a href=""></a>
					<h3 style={{ textAlign: "center" }}>Get In Touch</h3>
					<form
						onSubmit={onSubmit}
						// action="https://shreyas-saver.herokuapp.com/save"
						// method="post"
						id="contact-form"
					>
						<label>Name</label>
						<input className="input-field" type="text" id={"name"} required />
						<label>Subject</label>
						<input
							required
							className="input-field"
							type="text"
							id={"subject"}
						/>
						<label>Email</label>
						<input className="input-field" required type="email" id={"email"} />
						<label>Message</label>
						<textarea
							className="input-field"
							required
							id={"message"}
						></textarea>
						<input id="submit-btn" type="submit" value="Send" />
					</form>
				</div>
			</section>
		</div>
	);
}
