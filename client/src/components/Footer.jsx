import { Box, Typography, Chip, Stack } from "@mui/joy";
import SocialsData from "utils/SocialsData";

export default function Footer() {
	return (
		<Box component="footer" sx={{ padding: "2em 0" }}>
			<Typography level="title3">Links</Typography>
			<Stack direction="row" spacing={2} flexWrap="wrap">
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
