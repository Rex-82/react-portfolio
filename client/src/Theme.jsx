import { useEffect, createContext, useState } from "react";

export const ThemeContext = createContext();

function getTheme() {
	// Try to get the current theme from local storage
	const theme = localStorage.getItem("localTheme");

	// Check if the theme exists
	if (!theme) {
		localStorage.setItem("localTheme", "dark-theme");
		return theme;
	}
	return theme;
}

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(getTheme);

	function toggleTheme() {
		theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
	}

	// When 'theme' variable updates, change the local theme content
	useEffect(() => {
		function refreshTheme() {
			localStorage.setItem("localTheme", theme);
		}

		refreshTheme();
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
