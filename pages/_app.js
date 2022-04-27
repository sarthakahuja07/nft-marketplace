/* pages/_app.js */
import Layout from "../components/Layout";
import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../themes";

function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page)

	return getLayout(
		<>
			<ThemeProvider theme={theme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
