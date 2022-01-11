import React from "react";

interface Props {
	color?: string;
}

const Check: React.FC<Props> = ({ color }) => {
	console.log(color);
	return (
		<span
			className={`w-4 h-4 mr-2 inline-flex items-center justify-center ${color} text-white rounded-full flex-shrink-0`}
		>
			<svg
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2.5"
				className="w-3 h-3"
				viewBox="0 0 24 24"
			>
				<path d="M20 6L9 17l-5-5"></path>
			</svg>
		</span>
	);
};

Check.defaultProps = {
	color: "bg-green-600"
};

export default Check;
