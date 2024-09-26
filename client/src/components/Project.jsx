import { Card, Link, Typography, Chip, Stack } from "@mui/joy";

export default function Project({ title, homepage, url, description, topics }) {
	const site = homepage?.replace(/^(https?:|)\/\/|(\/$)/g, "");

	return (
		<Card
			sx={{
				//position: { sm: "relative" },
				//"&:hover": {
				//	bottom: { sm: "10px" },
				//},
				width: { xl: "50%", lg: "60%", md: "80%", xs: "100%" },
				margin: { xs: "0.5rem" },
			}}
		>
			<Stack
				direction="row"
				justifyContent="space-between"
				gap={1}
				flexWrap="wrap"
			>
				<Link
					overlay
					underline="none"
					title={title}
					href={url}
					target="_blank"
					rel="noopener"
				>
					<Typography
						level="title2"
						sx={(theme) => ({
							color: [theme.palette.text.secondary],
						})}
					>
						{title}
					</Typography>
				</Link>
				<Link title={homepage} href={homepage} target="_blank" rel="noopener">
					<Typography level="body">{site}</Typography>
				</Link>
			</Stack>

			<Typography
				sx={(theme) => ({
					color: [theme.palette.text.tertiary],
				})}
				level="callout"
			>
				{description}
			</Typography>
			<Stack direction="row" gap={1} flexWrap="wrap">
				{topics?.map((topic, i) => (
					<Chip variant="outlined" key={i}>
						<Typography level="caption1">{topic}</Typography>
					</Chip>
				))}
			</Stack>
		</Card>
	);
}
