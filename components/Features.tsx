import React from "react";
import FeatureCard from "./FeatureCard";

// Documentation
// Open Source
// Clean UI
// Nested Files & Folders
// Direct Download & Share
// File Previews (coming soon)

const Features = () => {
	return (
		<div className="features-main pb-20">
			<div className="px-5 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 h-full">
				<FeatureCard title="Documentation" subtitle="Get an in-depth guide of how Next.js works." />
				<FeatureCard title="Documentation" subtitle="Get an in-depth guide of how Next.js works." />
				<FeatureCard title="Documentation" subtitle="Get an in-depth guide of how Next.js works." />
				<FeatureCard title="Documentation" subtitle="Get an in-depth guide of how Next.js works." />
				<FeatureCard title="Documentation" subtitle="Get an in-depth guide of how Next.js works." />
				<FeatureCard title="Documentation" subtitle="Get an in-depth guide of how Next.js works." />
			</div>
		</div>
	);
};

export default Features;
