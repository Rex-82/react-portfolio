import { Card, Link, Typography, Chip, Stack } from "@mui/joy";
import { useEffect, useState } from "react";

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
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("https://api.github.com/users/Rex-82/repos")
			.then((response) => {
				if (response.ok) return response.json();
				throw new Error(`Response status: ${response.status}`);
			})
			.then((json) => {
				setTimeout(() => setData(json), 4000);
			})
			.catch((error) => {
				console.error(error);
			});
	});

	return (
		<Stack direction="column" spacing={2}>
			{data?.map((repo) => {
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
