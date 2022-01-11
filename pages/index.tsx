import Head from "next/head";
import { useEffect } from "react";
import About from "../components/About";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import UseCases from "../components/UseCases";

export default function Home() {
	useEffect(() => {
		const styleTags = document.querySelectorAll("style");
		if (styleTags.length > 1) {
			styleTags[1].remove();
		}
	}, []);

	return (
		<div className="main">
			<Head>
				<title>Firefiles</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<Hero />
			<About />
			<Features />
			<UseCases />
			<Pricing />

			<footer className="flex items-center justify-center w-full h-24 border-t">
				<a
					className="flex items-center justify-center"
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
				</a>
			</footer>
		</div>
	);
}
