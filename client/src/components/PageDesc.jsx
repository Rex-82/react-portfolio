import { Typography, Divider } from "@mui/joy";

export default function PageDesc({ title, description }) {
	return (
		<>
			<Typography level="title1" padding="0.5rem">
				{title}
			</Typography>
			<Divider orientation="horizontal" />
			<Typography level="body" padding="0.5rem">
				{description}
			</Typography>
		</>
	);
}
