// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const config = {
	title: "Firefiles",
	tagline: "A drive-like UI for Firebase",
	url: "https://firefiles.vercel.app",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "faisalsayed10", // Usually your GitHub org/user name.
	projectName: "firefiles-website", // Usually your repo name.

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl: "https://github.com/faisalsayed10/firefiles-website/tree/main/docs/"
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css")
				}
			})
		]
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "Firefiles",
				logo: {
					alt: "Firefiles Logo",
					src: "img/logo.svg"
				},
				items: [
					{
						type: "doc",
						docId: "intro",
						position: "left",
						label: "Documentation"
					},
					{
						href: "https://github.com/faisalsayed10/firefiles-website",
						label: "GitHub",
						position: "right"
					}
				]
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Help",
						items: [
							{
								label: "Documentation",
								to: "/docs/intro"
							},
							{
								label: "Contact Support",
								href: "mailto:firefiles@fayd.me"
							}
						]
					},
					{
						title: "Community",
						items: [
							{
								label: "Twitter",
								href: "https://twitter.com/faisal_sayed05"
							}
						]
					}
				],
				copyright: `Copyright © ${new Date().getFullYear()} Faisal Sayed. Built with Docusaurus.`
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme
			}
		})
};

module.exports = config;
