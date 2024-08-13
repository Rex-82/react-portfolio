import { Box, Stack } from "@mui/joy";
import ModeToggle from "components/ModeToggle";

export default function Header() {
	return (
		<Box
			component="header"
			sx={(theme) => ({
				zIndex: [theme.zIndex.popup],
				padding: "1em 0",
				backdropFilter: "blur(5px)",
				backgroundColor: [theme.palette.background.backdrop],
				borderBottomWidth: [theme.lineHeight.md],
				borderBottomStyle: "solid",
				borderBottomColor: [theme.palette.divider],
			})}
			position="sticky"
			top={0}
		>
			<Stack direction="row" justifyContent="end" spacing={2}>
				<ModeToggle />
			</Stack>
		</Box>
	);
}
