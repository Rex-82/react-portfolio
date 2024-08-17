import { Box, Typography, Chip, Stack } from "@mui/joy";
import SocialsData from "utils/SocialsData";

export default function Footer() {
	return (
		<Box
			component="footer"
			sx={(theme) => ({
				padding: "2rem",
				marginTop: "2rem",
				backgroundColor: [theme.palette.background.level1],
				borderTopWidth: [theme.lineHeight.md],
				borderTopStyle: "solid",
				borderTopColor: [theme.palette.divider],
			})}
		>
			<Typography level="title3">Links</Typography>
			<Stack
				direction="row"
				flexWrap="wrap"
				gap={2}
				paddingTop="1rem"
				justifyContent="center"
			>
				{SocialsData.map((link, i) => (
					<Chip
						key={i}
						variant="outlined"
						size="lg"
						startDecorator={link.icon}
						slotProps={{
							action: { component: "a", href: link.href },
						}}
						title={link.title}
					>
						{link.text}
					</Chip>
				))}
			</Stack>
		</Box>
	);
}
