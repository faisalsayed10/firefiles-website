import React from "react";

const Navbar = () => {
	return (
		<div className="flex justify-between items-center absolute w-full z-50 px-4 my-2">
			<img className="h-16 w-16" src="/firefiles-logo.png" alt="logo" />
			<div className="flex items-center justify-evenly w-1/2">
				<a href="#" className="text-xl font-medium text-gray-500 hover:text-gray-900 mx-1">
					About
				</a>
				<a href="#" className="text-xl font-medium text-gray-500 hover:text-gray-900 mx-1">
					Features
				</a>
				<a href="#" className="text-xl font-medium text-gray-500 hover:text-gray-900 mx-1">
					Use Cases
				</a>
				<a href="#" className="text-xl font-medium text-gray-500 hover:text-gray-900 mx-1">
					Pricing
				</a>
			</div>
			<div className="inline-flex rounded-md shadow h-10">
				<a
					href="#"
					className="inline-flex items-center justify-center px-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
				>
					Go to App
				</a>
			</div>
		</div>
	);
};

export default Navbar;
