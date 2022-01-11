import React from "react";

const About = () => {
	return (
		<div className="about-main relative">
			<div className="about-bg w-full h-2/3 absolute top-0 -z-10" />
			<div className="blur-gradient -z-10 top-1/3" />
			<div className="p-10 pb-0 flex items-center justify-between flex-row min-h-screen">
				<div className="text-white max-w-lg text-2xl">
					<p>Firefiles is a SaaS which provides you with a Google Drive like interface for your Firebase storage buckets. Just provide us with your config and you're good to go!</p>
					<br />
					<p>Coming soon for other providers!</p>
				</div>
				<img
					src="/firefiles-demo2.png"
					className="z-10 rounded-lg shadow-xl"
					style={{ width: "700px" }}
				/>
			</div>
		</div>
	);
};

export default About;
