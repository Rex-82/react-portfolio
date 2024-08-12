import Projects from "./Projects";
import Footer from "./Footer.jsx";
import { Typography } from "@mui/joy";

export default function Home() {
	return (
		<>
			<Typography level="title1">Simone Ferretti</Typography>
			<Projects />
			<Projects />
			<Footer />
		</>
	);
}
