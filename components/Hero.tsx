import { motion } from "framer-motion";

const Hero = () => {
	return (
		<div className="hero-main">
			<div className="hero-img">
				<div className="flex min-h-screen hero-bg relative items-center justify-center flex-col">
					<div className="blur-gradient -z-10" />
					<motion.h1
						initial={{ scale: 0.5, opacity: 0, skewX: "-5deg" }}
						animate={{ scale: 1, opacity: 1, skewX: "0deg" }}
						transition={{ duration: 0.7, ease: "backOut" }}
						className="font-semibold text-6xl md:text-8xl"
					>
						Firefiles
					</motion.h1>
					<motion.p
						initial={{ scale: 0.5, opacity: 0, skewX: "-5deg" }}
						animate={{ scale: 1, opacity: 1, skewX: "0deg" }}
						transition={{ duration: 0.7, ease: "backOut" }}
						className="text-xl md:text-3xl text-center"
					>
						Get your own file hosting service in minutes.
					</motion.p>
					<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
						<motion.div
							initial={{ opacity: 0, translateY: 10 }}
							animate={{ opacity: 1, translateY: 0 }}
							transition={{ duration: 0.3, delay: 0 }}
						>
							<a
								href="#pricing"
								className="box-border relative z-30 h-full inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ease focus:outline-none"
							>
								<span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
								<span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
								<span className="relative z-20 flex items-center text-sm">
									<svg
										className="relative w-5 h-5 mr-2 text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M13 10V3L4 14h7v7l9-11h-7z"
										></path>
									</svg>
									Try Now
								</span>
							</a>
						</motion.div>
						<motion.div
							className="mt-3 sm:mt-0 sm:ml-3"
							initial={{ opacity: 0, translateY: 10 }}
							animate={{ opacity: 1, translateY: 0 }}
							transition={{ duration: 0.3, delay: 0 }}
						>
							<a
								href="/docs"
								className="inline-flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
							>
								View docs
							</a>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
