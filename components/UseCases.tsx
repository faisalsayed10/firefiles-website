import { motion } from "framer-motion";
import useAnimateOnInView from "../hooks/useAnimateOnInView";
import ArrowRight from "./icons/ArrowRight";
import Monitor from "./icons/Monitor";
import Person from "./icons/Person";
import Sparkle from "./icons/Sparkle";

const variant1 = {
	visible: {
		opacity: 1,
		transition: { duration: 0.4, ease: "easeIn" },
		translateX: 0
	},
	hidden: { opacity: 0, translateX: -100 }
};

const variant2 = {
	visible: {
		opacity: 1,
		transition: { duration: 0.4, ease: "easeIn" },
		translateX: 0
	},
	hidden: { opacity: 0, translateX: 100 }
};

const UseCases = () => {
	const { ref, controls } = useAnimateOnInView();
	const { ref: ref2, controls: controls2 } = useAnimateOnInView();
	const { ref: ref3, controls: controls3 } = useAnimateOnInView();

	return (
		<section className="text-gray-600 body-font min-h-screen" id="use-cases">
			<div className="container px-5 mx-auto pb-20 relative">
				<div className="bg-fuchsia-100 top-24 left-20 w-64 h-64 md:w-80 md:h-80 mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000 duration-1000 absolute rounded-full -z-10" />
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
				<motion.div
					ref={ref}
					animate={controls}
					initial="hidden"
					variants={variant1}
					className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"
				>
					<div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
						<Person />
					</div>
					<div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
						<h2 className="text-gray-900 text-lg title-font font-medium mb-2">
							Personal File Hosting
						</h2>
						<p className="leading-relaxed text-base">
							Tired of using the same old Google Drive or Dropbox? Want to have something new and
							more personal? Yeah Firefiles is here exactly for you.
						</p>
						<a className="mt-3 text-indigo-500 inline-flex items-center">
							View Docs <ArrowRight className="ml-2" />
						</a>
					</div>
				</motion.div>
				<motion.div
					ref={ref2}
					animate={controls2}
					initial="hidden"
					variants={variant2}
					className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"
				>
					<div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
						<h2 className="text-gray-900 text-lg title-font font-medium mb-2">
							Monitor Your Project
						</h2>
						<p className="leading-relaxed text-base">
							Want to monitor how your Firebase storage is getting used? Yeah, not gonna lie that
							Firebase UI is kinda overwhelming and slow. Firefiles is here to help.
						</p>
						<a className="mt-3 text-indigo-500 inline-flex items-center">
							View Docs <ArrowRight className="ml-2" />
						</a>
					</div>
					<div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
						<Monitor />
					</div>
				</motion.div>
				<motion.div
					ref={ref3}
					animate={controls3}
					initial="hidden"
					variants={variant1}
					className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col"
				>
					<div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
						<Sparkle />
					</div>
					<div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
						<h2 className="text-gray-900 text-lg title-font font-medium mb-2">
							Why not simply for fun?
						</h2>
						<p className="leading-relaxed text-base">
							Getting bored of all the Web3 hassle on Twitter? Well, here's an opportunity for you
							to try something new and fun!
						</p>
						<a className="mt-3 text-indigo-500 inline-flex items-center">
							View Docs <ArrowRight className="ml-2" />
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default UseCases;
