import { useState, useEffect } from "react";
import { useColorScheme, Button } from "@mui/joy";

export default function ModeToggle() {
	const { mode, setMode } = useColorScheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) {
		return null;
	}

	return (
		<Button
			variant="soft"
			onClick={() => {
				setMode(mode === "light" ? "dark" : "light");
			}}
		>
			{mode === "light" ? "Turn dark" : "Turn light"}
		</Button>
	);
}
