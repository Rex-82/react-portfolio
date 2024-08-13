import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/joy";
import { CssVarsProvider } from "@mui/joy/styles";

import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Dotfiles from "pages/Dotfiles";
// import ThemeTypography from "./components/storybooks/ThemeTypography";

import Header from "components/Header";
import Footer from "components/Footer";
import CustomTheme from "utils/CustomTheme";

export default function App() {
	return (
		<>
			<CssVarsProvider defaultMode="system" theme={CustomTheme}>
				<CssBaseline />
				<Header />
				<Router>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/dotfiles" element={<Dotfiles />} />
						{/* <Route path="/typography" element={<ThemeTypography />} /> */}
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Router>
				<Footer />
			</CssVarsProvider>
		</>
	);
}
