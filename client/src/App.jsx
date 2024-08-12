import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/joy";

import Home from "./Home";
import NotFound from "./NotFound";

import { ThemeContext } from "./Theme";
import { useContext } from "react";

export default function App() {
	const { theme } = useContext(ThemeContext);

	return (
		<>
			<CssBaseline />
			<div className={`${theme}`}>
				<Router>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Router>
			</div>
		</>
	);
}
