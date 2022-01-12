import React from "react";

const Footer = () => {
	return (
		<footer className="text-gray-600 body-font border-t">
			<div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
				<a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
					<img src="/firefiles-logo.png" alt="Firefiles" className="w-10 h-10 mr-2" />
					<span className="ml-3 text-xl">Firefiles</span>
				</a>
				<p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
					© {new Date().getFullYear()} Firefiles —
					<a
						href="https://twitter.com/faisal_sayed05"
						className="text-gray-600 ml-1"
						rel="noopener noreferrer"
						target="_blank"
					>
						@faisal_sayed05
					</a>
				</p>
				<span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
					<a
						href="https://github.com/faisalsayed10/firefiles"
						className="text-gray-500 cursor-pointer"
					>
						<svg
							fill="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="w-6 h-6"
							viewBox="0 0 24 24"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
							></path>
						</svg>
					</a>
					<a
						href="https://twitter.com/faisal_sayed05"
						className="text-gray-500 cursor-pointer ml-3"
					>
						<svg
							fill="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="w-6 h-6"
							viewBox="0 0 24 24"
						>
							<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
						</svg>
					</a>
				</span>
			</div>
		</footer>
	);
};

export default Footer;
