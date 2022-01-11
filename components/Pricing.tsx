import React from "react";
import ArrowRight from "./icons/ArrowRight";
import Check from "./icons/Check";

interface Props {}

const Pricing = (props: Props) => {
	return (
		<section className="text-gray-600 body-font overflow-hidden" id="pricing">
			<div className="container px-5 mx-auto pb-20">
				<div className="text-center mb-20">
					<h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
						Pricing
					</h1>
					<p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
						Flexible and cheap. Choose from hosting it yourself or using the hosted version.
					</p>
					<div className="flex mt-6 justify-center">
						<div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
					</div>
				</div>
				<div className="flex flex-wrap -m-4 justify-center">
					<div className="p-4 pricing-card">
						<div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
							<span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
								POPULAR
							</span>
							<h2 className="text-sm tracking-widest title-font mb-1 font-medium">HOSTED</h2>
							<h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
								<span>$0</span>
								<span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
							</h1>
							<p className="flex items-center text-gray-600 mb-2">
								<Check /> Plug and Play.
							</p>
							<p className="flex items-center text-gray-600 mb-2">
								<Check /> Access to all features.
							</p>
							<p className="flex items-center text-gray-600 mb-2">
								<Check /> 24/7 email support.
							</p>
							<p className="flex items-center text-gray-600 mb-6">
								<Check /> Instant updates.
							</p>
							<a href="https://firefiles.vercel.app" target="_blank" className="mt-auto">
								<button className="flex items-center text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
									Try Now <ArrowRight />
								</button>
							</a>
							<p className="text-xs text-gray-500 mt-3">Free to all users while in beta.</p>
						</div>
					</div>
					<div className="p-4 pricing-card">
						<div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
							<h2 className="text-sm tracking-widest title-font mb-1 font-medium">SELF-HOSTED</h2>
							<h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
								Free
							</h1>
							<p className="flex items-center text-gray-600 mb-2">
								<Check /> Deploy your own instance.
							</p>
							<p className="flex items-center text-gray-600 mb-2">
								<Check /> Access to all features.
							</p>
							<p className="flex items-center text-gray-600 mb-2">
								<Check /> 24/7 email support.
							</p>
							<p className="flex items-center text-gray-600 mb-6">
								<Check color="bg-gray-400" /> Re-deploy to update.
							</p>
							<a href="/docs" className="mt-auto">
								<button className="flex items-center text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
									View Docs <ArrowRight />
								</button>
							</a>
							<p className="text-xs text-gray-500 mt-3">100% Free Forever.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
