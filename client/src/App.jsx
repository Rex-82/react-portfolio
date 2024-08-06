import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { IconButton, useMediaQuery } from "@mui/material";
import { WbSunny } from "@mui/icons-material";

import Home from "./Home";
import NotFound from "./NotFound";
import { useMemo, useState } from "react";

export default function App() {
	const isInitiallyDark = useMediaQuery("(prefers-color-scheme: dark)");

	const [mode, setMode] = useState(isInitiallyDark ? "dark" : "light");

	const switchColorMode = () => {
		setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
	};

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[mode],
	);

	return (
		<>
			<IconButton color="secondary" onClick={switchColorMode}>
				<WbSunny />
			</IconButton>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Router>
			</ThemeProvider>
		</>
	);
}
