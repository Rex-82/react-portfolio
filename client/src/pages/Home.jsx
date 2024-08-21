import Projects from "components/Projects";
import { Typography, Divider } from "@mui/joy";

export default function Home({ children }) {
	return (
		<>
			{children}
			<Projects />
		</>
	);
}
