import { Box, Stack, Button } from "@mui/joy";
import ModeToggle from "components/ModeToggle";
import { Link as RouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header() {
	const { hash, pathname, search } = useLocation();

	const links = [
		{ name: "home", href: "/" },
		{ name: "dotfiles", href: "/dotfiles" },
	];

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
					{links.map((link, i) => {
						return (
							<Button
								key={i}
								padding="0.25em"
								component={RouterLink}
								to={link.href}
								variant="plain"
								sx={(theme) => ({
									color:
										link.href === pathname
											? [theme.palette.common[400]]
											: [theme.palette.text.primary],
								})}
							>
								{link.name}
							</Button>
						);
					})}
				</Box>
				<ModeToggle />
			</Stack>
		</Box>
	);
}
