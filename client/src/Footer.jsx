import { Box, Typography, Chip, Stack } from "@mui/joy";
import { GitHub, Email, LinkedIn, AutoGraph } from "@mui/icons-material";

const links = [
	{
		title: "Github profile",
		text: "Github",
		href: "https://github.com/Rex-82",
		icon: <GitHub />,
	},
	{
		title: "Linkedin profile",
		text: "Linkedin",
		href: "https://www.linkedin.com/in/simoneferretti/",
		icon: <LinkedIn />,
	},
	{
		title: "Wakatime coding stats",
		text: "Coding stats",
		href: "https://wakatime.com/@Rex82",
		icon: <AutoGraph />,
	},
	{
		title: "email",
		text: "simone.ferretti.work@gmail.com",
		href: "mailto:simone.ferretti.work@gmail.com",
		icon: <Email />,
	},
];
export default function Footer() {
	return (
		<Box component="footer" sx={{ padding: "2em 0" }}>
			<Typography level="title3">Links</Typography>
			<Stack direction="row" spacing={2} flexWrap="wrap">
				{links.map((link, i) => (
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
