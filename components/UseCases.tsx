import React from "react";

interface Props {}

const UseCases = (props: Props) => {
	return (
		<section className="text-gray-600 body-font min-h-screen">
			<div className="container px-5 mx-auto pb-20">
				<div className="text-center mb-20">
					<h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
						Use Cases
					</h1>
					<p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
						Few reasons why you should use Firefiles.
					</p>
					<div className="flex mt-6 justify-center">
						<div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
					</div>
				</div>
				<div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
					<div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
						<svg
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							className="sm:w-16 sm:h-16 w-10 h-10"
							viewBox="0 0 24 24"
						>
							<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
						</svg>
					</div>
					<div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
						<h2 className="text-gray-900 text-lg title-font font-medium mb-2">Shooting Stars</h2>
						<p className="leading-relaxed text-base">
							Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub
							indxgo juice poutine.
						</p>
						<a className="mt-3 text-indigo-500 inline-flex items-center">
							View Docs
							<svg
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								className="w-4 h-4 ml-2"
								viewBox="0 0 24 24"
							>
								<path d="M5 12h14M12 5l7 7-7 7"></path>
							</svg>
						</a>
					</div>
				</div>
				<div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
					<div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
						<h2 className="text-gray-900 text-lg title-font font-medium mb-2">The Catalyzer</h2>
						<p className="leading-relaxed text-base">
							Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub
							indxgo juice poutine.
						</p>
						<a className="mt-3 text-indigo-500 inline-flex items-center">
							View Docs
							<svg
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								className="w-4 h-4 ml-2"
								viewBox="0 0 24 24"
							>
								<path d="M5 12h14M12 5l7 7-7 7"></path>
							</svg>
						</a>
					</div>
					<div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
						<svg
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							className="sm:w-16 sm:h-16 w-10 h-10"
							viewBox="0 0 24 24"
						>
							<circle cx="6" cy="6" r="3"></circle>
							<circle cx="6" cy="18" r="3"></circle>
							<path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
						</svg>
					</div>
				</div>
				<div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
					<div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
						<svg
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							className="sm:w-16 sm:h-16 w-10 h-10"
							viewBox="0 0 24 24"
						>
							<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
							<circle cx="12" cy="7" r="4"></circle>
						</svg>
					</div>
					<div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
						<h2 className="text-gray-900 text-lg title-font font-medium mb-2">The 400 Blows</h2>
						<p className="leading-relaxed text-base">
							Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub
							indxgo juice poutine.
						</p>
						<a className="mt-3 text-indigo-500 inline-flex items-center">
							View Docs
							<svg
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								className="w-4 h-4 ml-2"
								viewBox="0 0 24 24"
							>
								<path d="M5 12h14M12 5l7 7-7 7"></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default UseCases;
