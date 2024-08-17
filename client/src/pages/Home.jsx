import Projects from "components/Projects";
import { Typography, Divider } from "@mui/joy";

export default function Home() {
	return (
		<>
			<Typography level="title1" padding="0.5rem">
				Simone Ferretti
			</Typography>
			<Divider orientation="horizontal" />
			<Typography level="title2" padding="0.5rem">
				Projects
			</Typography>
			<Projects />
		</>
	);
}
