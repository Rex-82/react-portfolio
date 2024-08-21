import { Card, Link, Typography, Chip, Stack } from "@mui/joy";

export default function Project({ title, homepage, url, description, topics }) {
	const site = homepage?.replace(/^(https?:|)\/\/|(\/$)/g, "");

	return (
		<Card
		//sx={{
		//	position: { sm: "relative" },
		//	"&:hover": {
		//		bottom: { sm: "10px" },
		//	},
		//}}
		>
			<Stack
				direction="row"
				justifyContent="space-between"
				gap={1}
				flexWrap="wrap"
			>
				<Link overlay underline="none" title={title} href={url}>
					<Typography level="title2">{title}</Typography>
				</Link>
				<Link title={homepage} href={homepage}>
					<Typography level="body">{site}</Typography>
				</Link>
			</Stack>

			<Typography level="callout">{description}</Typography>
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
