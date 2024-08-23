import { Box, Stack, Button } from "@mui/joy";
import ModeToggle from "components/ModeToggle";
import { Link as RouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header() {
	const { pathname } = useLocation();

	const links = [
		{ name: "home", href: "/" },
		{ name: "dotfiles", href: "/dotfiles" },
	];

	return (
		<Box
			component="header"
			sx={(theme) => ({
				zIndex: [theme.zIndex.popup],
				py: "1em",
				backdropFilter: "blur(5px)",
				borderBottomWidth: "1px",
				borderBottomStyle: "solid",
				borderBottomColor: [theme.palette.divider],
			})}
			position="sticky"
			top={0}
		>
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				spacing={2}
				px="1rem"
				height="1rem"
			>
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
