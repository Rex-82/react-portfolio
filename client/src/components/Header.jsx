import { Box, Stack } from "@mui/joy";
import ModeToggle from "components/ModeToggle";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/joy";

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
			<Stack direction="row" justifyContent="space-between" spacing={2}>
				<Box component="nav">
					<Link padding="0.25em" component={RouterLink} to="/">
						home
					</Link>
					<Link padding="0.25em" component={RouterLink} to="/dotfiles">
						dotfiles
					</Link>
				</Box>
				<ModeToggle />
			</Stack>
		</Box>
	);
}
