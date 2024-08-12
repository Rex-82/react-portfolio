import { useTheme } from "@emotion/react";
import { Typography } from "@mui/joy";

export default function ThemeTypography() {
	const theme = useTheme();
	return (
		<>
			{Object.keys(theme.typography)
				.filter((level) => !!theme.typography[level])
				.map((level) => (
					<Typography key={level} level={level} textAlign="center">
						{level}
					</Typography>
				))}
		</>
	);
}
