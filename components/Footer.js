import React from 'react';

const Footer = () => {
	const today = new Date();
	return (
		<footer className=" fixed bottom-0 flex mx-auto w-full bg-blue-800 items-center justify-center text-white">
			<p className="text-sm">
				{' '}
				Copyright AWP Coding &copy; {today.getFullYear()}
			</p>
		</footer>
	);
};

export default Footer;
