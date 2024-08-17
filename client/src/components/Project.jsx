import { Card, Link, Typography, Chip, Stack } from "@mui/joy";

export default function Project({ title, url, description, topics }) {
	return (
		<Card
		//sx={{
		//	position: { sm: "relative" },
		//	"&:hover": {
		//		bottom: { sm: "10px" },
		//	},
		//}}
		>
			<Link overlay underline="none" title={title} href={url}>
				<Typography level="title2">{title}</Typography>
			</Link>
			<Typography level="callout">{description}</Typography>
			<Stack direction="row" spacing={1}>
				{topics?.map((topic, i) => (
					<Chip variant="outlined" key={i}>
						<Typography level="caption1">{topic}</Typography>
					</Chip>
				))}
			</Stack>
		</Card>
	);
}
