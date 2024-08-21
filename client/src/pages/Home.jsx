import Projects from "components/Projects";

export default function Home({ children }) {
	return (
		<>
			{children}
			<Projects />
		</>
	);
}
