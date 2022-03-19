import React from 'react';
import Home from '../components/Home';
import Layout from '../components/Layout';

export default function About() {
	return (
		<Layout>
			<div className="flex-1 h-screen w-full  pt-5 bg-pink-100">
				<Home />
			</div>
		</Layout>
	);
}
