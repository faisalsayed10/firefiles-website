import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
	return (
		<section id="features">
			<div className="features-main pb-20">
				<div className="px-5 grid grid-cols-1 gap-2 gap-y-4 md:grid-cols-2 lg:grid-cols-3 h-full">
					<FeatureCard
						title="Documentation"
						subtitle="Everything you need to know about Firefiles, at one place."
					/>
					<FeatureCard
						title="Open Source"
						subtitle="Yeah you got it right! We're fully open-sourced on GitHub."
					/>
					<FeatureCard
						title="Clean UI"
						subtitle="A clean UI for managing your files and folders efficiently."
					/>
					<FeatureCard
						title="Direct Download & Share"
						subtitle="Directly download and share files right from the browser."
					/>
					<FeatureCard
						title="Security"
						subtitle="Your keys are stored safely with us encrypted with AES-256 algorithm."
					/>
					<FeatureCard
						title="File Previews"
						subtitle="Preview all your files right in your browser. (coming soon)"
					/>
				</div>
			</div>
		</section>
	);
};

export default Features;
