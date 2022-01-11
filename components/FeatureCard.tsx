import React from "react";

interface Props {
	title: string;
	subtitle: string;
}

const FeatureCard: React.FC<Props> = ({ title, subtitle }) => {
	return (
		<div className="flex flex-wrap items-center justify-around max-w-4xl sm:w-full z-10">
			<div className="border p-6 text-left w-96 rounded-xl bg-white">
				<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
					<svg
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						className="w-6 h-6"
						viewBox="0 0 24 24"
					>
						<circle cx="6" cy="6" r="3"></circle>
						<circle cx="6" cy="18" r="3"></circle>
						<path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
					</svg>
				</div>
				<h2 className="text-xl font-semibold text-gray-900 title-font mb-2">{title}</h2>
				<p className="leading-relaxed mt-4">{subtitle}</p>
			</div>
		</div>
	);
};

export default FeatureCard;
