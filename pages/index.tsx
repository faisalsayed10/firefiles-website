import Head from "next/head";
import { useEffect } from "react";
import About from "../components/About";
import Features from "../components/Features";
import Footer from "../components/Footer";
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
			<Footer />
		</div>
	);
}
