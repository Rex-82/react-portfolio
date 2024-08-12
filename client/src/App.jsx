import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/joy";
import { CssVarsProvider } from "@mui/joy/styles";

import Home from "./Home";
import NotFound from "./NotFound";
// import ThemeTypography from "./components/storybooks/ThemeTypography";

import ModeToggle from "./components/ModeToggle";
import customTheme from "../utils/customTheme";

export default function App() {
	return (
		<>
			<CssVarsProvider theme={customTheme}>
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
		</>
	);
}
