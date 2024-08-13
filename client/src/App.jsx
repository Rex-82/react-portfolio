import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/joy";
import { CssVarsProvider } from "@mui/joy/styles";

import Home from "pages/Home";
import NotFound from "pages/NotFound";
// import ThemeTypography from "./components/storybooks/ThemeTypography";

import ModeToggle from "components/ModeToggle";
import CustomTheme from "utils/CustomTheme";

export default function App() {
	return (
		<CssVarsProvider defaultMode="system" theme={CustomTheme}>
			<CssBaseline />
			<ModeToggle />
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					{/* <Route path="/typography" element={<ThemeTypography />} /> */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</CssVarsProvider>
	);
}
