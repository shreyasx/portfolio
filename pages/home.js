import Head from "next/head";
import Image from "next/image";
import React from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import styles from "../styles/home.module.css";

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
				<link id="theme-style" rel="stylesheet" href="" />
				<link rel="stylesheet" href="/home-global.css" />
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

			<section className={styles.s1}>
				<div className={styles["main-container"]}>
					<div className={styles["greeting-wrapper"]}>
						<h1>Good to see you here!</h1>
					</div>
					<div className={styles["intro-wrapper"]}>
						<div className={styles["nav-wrapper"]}>
							<a href="#">
								<div className={styles["dots-wrapper"]}>
									<div
										id={styles["dot-1"]}
										className={styles["browser-dot"]}
									></div>
									<div
										id={styles["dot-2"]}
										className={styles["browser-dot"]}
									></div>
									<div
										id={styles["dot-3"]}
										className={styles["browser-dot"]}
									></div>
								</div>
							</a>
							<ul id={styles.navigation}>
								<li>
									<a href="#contact-form">Contact</a>
								</li>
							</ul>
						</div>
						<div className={styles["left-column"]}>
							<div id={styles.profile_pic}>
								<Image
									alt="Shrey"
									placeholder="blur"
									blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
									src="/images/shrey.jpg"
									width={200}
									height={200}
								/>
							</div>
							<h5 style={{ textAlign: "center", lineHeight: 0 }}>
								Pick your Theme.
							</h5>
							<div id={styles["theme-options-wrapper"]}>
								<div
									data-mode="light"
									id={styles["light-mode"]}
									className={"theme-dot"}
								></div>
								<div
									data-mode="blue"
									id={styles["blue-mode"]}
									className={"theme-dot"}
								></div>
								<div
									data-mode="green"
									id={styles["green-mode"]}
									className={"theme-dot"}
								></div>
								<div
									data-mode="purple"
									id={styles["purple-mode"]}
									className={"theme-dot"}
								></div>
							</div>
							<p id={styles["settings-note"]}>
								Theme settings will be saved for
								<br />
								your next vist
							</p>
						</div>
						<div className={styles["right-column"]}>
							<div id={styles["preview-shadow"]}>
								<div id={styles.preview}>
									<div id={styles["corner-tl"]} className={styles.corner}></div>
									<div id={styles["corner-tr"]} className={styles.corner}></div>
									<h3>What I Am</h3>
									<p>
										A consistent LEARNER and a self-taught Full-Stack Web
										Developer.
									</p>
									<div id={styles["corner-br"]} className={styles.corner}></div>
									<div id={styles["corner-bl"]} className={styles.corner}></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.s2}>
				<div className={styles["main-container"]}>
					<div className={styles["about-wrapper"]}>
						<div className={styles["about-me"]}>
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
							<div id={styles.skills}>
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
						<div className={styles["social-links"]}>
							<Image
								height={450}
								width={700}
								layout="responsive"
								placeholder="blur"
								blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
								alt="work"
								src="/images/work.webp"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.s1}>
				<div className={styles["main-container"]}>
					<h3 style={{ textAlign: "center" }}>Some of my past projects</h3>
					<div className={styles["post-wrapper"]}>
						<div>
							<div className={styles.post}>
								<div className={styles.thumbnail}>
									<Image
										height={180}
										width={318}
										alt="thumbnail"
                    placeholder="blur"
									blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
										src="/images/xtreme.png"
									/>
								</div>
								<div className={styles["post-preview"]}>
									<h6 className={styles["post-title"]}>XTREME Gameshop</h6>
									<p className={styles["post-intro"]}>
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
							<div className={styles.post}>
								<div className={styles.thumbnail}>
									<Image
										height={180}
										width={318}
										alt="thumbnail"
                    placeholder="blur"
									blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
										src="/images/logod.png"
									/>
								</div>
								<div className={styles["post-preview"]}>
									<h6 className={styles["post-title"]}>Logo Designer</h6>
									<p className={styles["post-intro"]}>
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
							<div className={styles.post}>
								<div className={styles.thumbnail}>
									<Image
										height={180}
										width={318}
										alt="thumbnail"
                    placeholder="blur"
									blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
										src="/images/rem.png"
									/>
								</div>
								<div className={styles["post-preview"]}>
									<h6 className={styles["post-title"]}>Reminders & Todos</h6>
									<p className={styles["post-intro"]}>
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
			<section className={styles.s2}>
				<div className={styles["main-container"]}>
					<a href=""></a>
					<h3 style={{ textAlign: "center" }}>Get In Touch</h3>
					<form
						onSubmit={onSubmit}
						// action="https://shreyas-saver.herokuapp.com/save"
						// method="post"
						id={styles["contact-form"]}
					>
						<label>Name</label>
						<input
							className={styles["input-field"]}
							type="text"
							id={"name"}
							required
						/>
						<label>Subject</label>
						<input
							required
							className={styles["input-field"]}
							type="text"
							id={"subject"}
						/>
						<label>Email</label>
						<input
							className={styles["input-field"]}
							required
							type="email"
							id={"email"}
						/>
						<label>Message</label>
						<textarea
							className={styles["input-field"]}
							required
							id={"message"}
						></textarea>
						<input id={"submit-btn"} type="submit" value="Send" />
					</form>
				</div>
			</section>
		</div>
	);
}
