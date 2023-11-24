import '../styles/globals.css'
import Layout from "../components/layout";
import '@/styles/globals.css'
import { ResponseContextProvider } from '@/context/ResponseContext';

export default function App({ Component, pageProps }) {
	return (
		<>
			<ResponseContextProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ResponseContextProvider>
		</>
		
	);
}
