import React from "react";

interface Props {
	title: string;
	subtitle: string;
	icon: React.ReactElement;
}

const FeatureCard: React.FC<Props> = ({ title, subtitle, icon }) => {
	return (
		<div className="flex flex-wrap items-center justify-around max-w-4xl sm:w-full z-10">
			<div className="border p-6 text-left w-96 rounded-xl bg-white gradient-border">
				<div>
					<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
						{icon}
					</div>
					<h2 className="text-xl font-semibold text-gray-900 title-font mb-2">{title}</h2>
					<p className="leading-relaxed mt-4">{subtitle}</p>
				</div>
			</div>
		</div>
	);
};

export default FeatureCard;
