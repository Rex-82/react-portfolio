import React, { useContext } from "react";
import { ThemeContext } from "./Theme";

export default function Toggle() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<button type="button" onClick={() => toggleTheme()}>
			{theme}
		</button>
	);
}
