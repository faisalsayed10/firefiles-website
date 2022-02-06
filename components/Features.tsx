import React from "react";
import useAnimateOnInView from "../hooks/useAnimateOnInView";
import FeatureCard from "./FeatureCard";
import Documentation from "./icons/Documentation";
import Download from "./icons/Download";
import FilePreview from "./icons/FilePreview";
import Lock from "./icons/Lock";

const cardVariant = {
	visible: {
		opacity: 1,
		transition: { duration: 0.5, ease: "backOut", delay: 0.2 },
		translateY: 0
	},
	hidden: { opacity: 0, translateY: 100 }
};

const Features = () => {
	const { ref, controls } = useAnimateOnInView();

	return (
		<section id="features">
			<div className="features-main pb-20">
				<div
					ref={ref}
					className="px-5 grid grid-cols-1 gap-2 gap-y-4 md:grid-cols-2 lg:grid-cols-3 h-full"
				>
					<FeatureCard
						controls={controls}
						variants={cardVariant}
						title="Documentation"
						subtitle="Everything you need to know about Firefiles, at one place."
						icon={<Documentation />}
					/>
					<FeatureCard
						controls={controls}
						variants={cardVariant}
						title="Open Source"
						subtitle="Yeah you got it right! We're fully open-sourced on GitHub."
						icon={
							<svg
								fill="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								viewBox="0 0 24 24"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
								></path>
							</svg>
						}
					/>
					<FeatureCard
						controls={controls}
						variants={cardVariant}
						title="Clean UI"
						subtitle="A clean UI for managing your files and folders efficiently."
						icon={
							<svg
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
								/>
							</svg>
						}
					/>
					<FeatureCard
						controls={controls}
						variants={cardVariant}
						title="Direct Download & Share"
						subtitle="Directly download and share files right from the browser."
						icon={<Download />}
					/>
					<FeatureCard
						controls={controls}
						variants={cardVariant}
						title="Security"
						subtitle="Your keys are stored safely with us encrypted with AES-256 algorithm."
						icon={<Lock />}
					/>
					<FeatureCard
						controls={controls}
						variants={cardVariant}
						title="File Previews"
						subtitle="Preview all your files right in your browser."
						icon={<FilePreview />}
					/>
				</div>
			</div>
		</section>
	);
};

export default Features;
