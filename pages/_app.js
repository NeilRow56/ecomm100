import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { StoreProvider } from '../utils/Store';

function MyApp({ Component, pageProps }) {
	return (
		<StoreProvider>
			<ThemeProvider attribute="class">
				<Component {...pageProps} />
			</ThemeProvider>
		</StoreProvider>
	);
}

export default MyApp;
