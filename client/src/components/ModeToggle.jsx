import { useColorScheme } from "@mui/joy/styles";
import { Chip } from "@mui/joy";
import { LightMode, ModeNight, Adjust } from "@mui/icons-material";

export default function ModeToggle() {
	const { mode, setMode } = useColorScheme();

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

	const stateCycle = ["light", "dark", "system"];

	function changeState() {
		const nextState =
			stateCycle[(stateCycle.indexOf(mode) + 1) % stateCycle.length];

		setMode(nextState);
	}

	return (
		<Chip
			variant="soft"
			startDecorator={states[mode].icon}
			onClick={changeState}
		>
			{states[mode].name}
		</Chip>
	);
}
