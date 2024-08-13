import { useColorScheme } from "@mui/joy/styles";
import { Chip } from "@mui/joy";
import { LightMode, ModeNight, Adjust } from "@mui/icons-material";
import { useState } from "react";

export default function ModeToggle() {
	const { mode, setMode } = useColorScheme();
	const [currentState, setCurrentState] = useState("system");

	const states = {
		light: {
			name: "Light theme",
			icon: <LightMode />,
		},
		dark: {
			name: "Dark theme",
			icon: <ModeNight />,
		},
		system: {
			name: "System theme",
			icon: <Adjust />,
		},
	};

	function changeState() {
		if (currentState === "dark") setCurrentState("system");
		else if (currentState === "system") setCurrentState("light");
		else if (currentState === "light") setCurrentState("dark");
		console.log(currentState, mode);
		setMode(currentState);
	}

	return (
		<Chip
			variant="outlined"
			startDecorator={states[mode].icon}
			color="neutral"
			onClick={changeState}
		>
			{states[mode].name}
		</Chip>
	);
}
