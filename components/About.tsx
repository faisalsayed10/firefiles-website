import React from "react";

const About = () => {
	return (
		<section id="about">
			<div className="2xl:max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:px-12 px-4 py-12 mx-auto">
				<div className="2xl:max-w-7xl flex flex-wrap items-center mx-auto">
					<div className="lg:flex-grow lg:w-1/2 lg:pr-24 md:mb-0 flex flex-col items-start mb-16 text-left">
						<span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
							About
						</span>
						<h1 className="text-gray-900 md:text-5xl lg:text-5xl mb-8 text-4xl font-bold leading-none tracking-tighter">
							WTH's Firefiles?
						</h1>
						<p className="mb-8 text-base leading-relaxed text-left text-gray-500">
							Firefiles is a SaaS which provides you with a drive like interface for your Firebase
							project's cloud storage bucket. You get your own file hosting service all setup with
							just a few clicks!
						</p>
						<div className="prose-md prose">
							<ul>
								<li className="text-gray-500">● Your files stay with you.</li>
								<li className="text-gray-500">● API keys encrypted with a strong algorithm.</li>
								<li className="text-gray-500">
									● 0% data stored with us (except the API keys ofcourse!).
								</li>
							</ul>
						</div>
					</div>
					<div className="lg:w-5/6 xl:max-w-lg rounded-xl xl:mt-0 w-full md:mt-12">
						<div>
							<div className="relative w-full">
								<div className="bg-violet-300 -left-4 w-64 h-64 md:w-80 md:h-80 mix-blend-multiply filter blur-xl opacity-70 animate-pulse absolute top-0 rounded-full"></div>
								<div className="bg-fuchsia-300 -bottom-24 right-20 w-64 h-64 md:w-80 md:h-80 mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000 absolute rounded-full"></div>
								<div className="relative">
									<img
										className="object-cover object-center mx-auto rounded-lg shadow-2xl"
										alt="hero image"
										src="/firefiles-demo2.png"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
