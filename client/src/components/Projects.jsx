import { Card, Link, Typography, Chip, Stack, Box } from "@mui/joy";
import queryData from "utils/QueryData";

function Project({ title, url, description, topics }) {
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
				{topics?.map((topic, i) => (
					<Chip variant="outlined" key={i}>
						<Typography level="caption1">{topic}</Typography>
					</Chip>
				))}
			</Stack>
		</Card>
	);
}
export default function Projects() {
	const endpoint = "https://api.github.com/users/Rex-82/repos";
	const queryKey = ["reposData"];

	const { status, data, error } = queryData(queryKey, endpoint);

	if (status === "pending") {
		return "Loading...";
	}
	if (status === "error") {
		return `An error has occured: ${error.message}`;
	}

	return (
		<Stack direction="column" spacing={2}>
			{data.map((repo) => {
				if (!repo.fork && repo.description !== null) {
					return (
						<Project
							key={repo.id}
							title={repo.name}
							url={repo.html_url}
							description={repo.description}
							topics={repo.topics}
						/>
					);
				}
			})}
		</Stack>
	);
}
