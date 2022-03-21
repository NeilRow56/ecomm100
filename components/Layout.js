import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ title, keywords, description, children }) {
	return (
		<>
			<Head>
				<title>{title ? `${title} - Amazona` : 'Amazona'}</title>
				{description && (
					<meta name="description" content={description} />
				)}
				<meta name="keywords" content={keywords} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main className="flex-1 h-screen w-full  pt-20">{children}</main>
			<Footer />
		</>
	);
}

Layout.defaultProps = {
	title: 'Amazona',
	description: 'Best prices for all fashion clothing',
	keywords: 'pants, shirts',
};
