import React from "react";
import styles from "./EmailForm.module.css";

const EmailForm = () => {
	const [email, setEmail] = React.useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// TODO: send a post request to store email in airtable
	};

	return (
		<div className={styles.card}>
			<form onSubmit={handleSubmit}>
				<div className={styles.input}>
					<input
						type="email"
						className={styles.inputfield}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<label className={styles.inputlabel}>Email</label>
				</div>
				<div className={styles.action}>
					<button className={styles.actionbutton}>Notify Me</button>
				</div>
			</form>
			<div className={styles.cardinfo}>
				<p>We'll never spam you. We promise.</p>
			</div>
		</div>
	);
};

export default EmailForm;
