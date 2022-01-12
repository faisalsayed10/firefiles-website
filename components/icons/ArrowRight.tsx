import React from "react";

interface Props {
	className?: string;
}

const ArrowRight: React.FC<Props> = ({ className }) => {
	return (
		<svg
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			className={`w-4 h-4 ml-auto ${className}`}
			viewBox="0 0 24 24"
		>
			<path d="M5 12h14M12 5l7 7-7 7"></path>
		</svg>
	);
};

export default ArrowRight;
