import { Card, Link, Typography, Chip, Stack } from "@mui/joy";
import { useQuery, useQueryClient } from "@tanstack/react-query";

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
	const queryClient = useQueryClient();

	async function fetchRepoData() {
		const response = await fetch("https://api.github.com/users/Rex-82/repos");
		if (!response.ok) {
			throw new Error(response);
		}
		return response.json();
	}

	// Check if the data is already cached
	let data = queryClient.getQueryData("repoData");

	// If data is not cached, use the query hook to fetch it
	if (!data) {
		const {
			status,
			data: queryData,
			error,
		} = useQuery({
			queryKey: ["repoData"],
			queryFn: fetchRepoData,
			staleTime: 1000 * 60 * 60, // 1 hour in milliseconds
		});

		if (status === "loading") {
			return "Loading...";
		}
		if (status === "error") {
			return `An error has occurred: ${error.message}`;
		}

		data = queryData;
	}

	// Filter and map over the data to render the projects
	return (
		<Stack direction="column" spacing={2}>
			{data
				?.filter((repo) => !repo.fork && repo.description !== null)
				.map((repo) => (
					<Project
						key={repo.id}
						title={repo.name}
						url={repo.html_url}
						description={repo.description}
						topics={repo.topics}
					/>
				))}
		</Stack>
	);
}
