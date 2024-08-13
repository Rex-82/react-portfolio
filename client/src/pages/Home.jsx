import Projects from "components/Projects";
import Footer from "components/Footer";
import { Typography } from "@mui/joy";

export default function Home() {
	return (
		<>
			<Typography level="title1">Simone Ferretti</Typography>
			<Projects />
			<Footer />
		</>
	);
}
