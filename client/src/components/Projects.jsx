import ProjectsData from "utils/ProjectsData.js";
import { Card, Link, Typography, Chip, Stack } from "@mui/joy";

function Project({ title, url, description, technologies }) {
	return (
		<Card
			sx={{
				position: { sm: "relative" },
				"&:hover": {
					bottom: { sm: "10px" },
				},
			}}
		>
			<Link overlay underline="none" title={title} href={url}>
				<Typography level="title2">{title}</Typography>
			</Link>
			<Typography level="callout">{description}</Typography>
			<Stack direction="row" spacing={1}>
				{technologies.map((tech, i) => (
					<Chip
						variant="outlined"
						key={i}
						slotProps={{ action: { component: "a", href: tech.url } }}
					>
						<Typography level="caption1">{tech.name}</Typography>
					</Chip>
				))}
			</Stack>
		</Card>
	);
}
export default function Projects() {
	return (
		<Stack direction="column" spacing={2}>
			{ProjectsData.map((project) => (
				<Project
					key={project.url}
					title={project.title}
					url={project.url}
					description={project.description}
					technologies={project.technologies}
				/>
			))}
		</Stack>
	);
}
