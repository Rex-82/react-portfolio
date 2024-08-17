import { Stack } from "@mui/joy";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Project from "components/Project";
import { ProjectSkeleton } from "./Skeletons";

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

	const {
		status,
		data: queryData,
		error,
	} = useQuery({
		queryKey: ["repoData"],
		queryFn: fetchRepoData,
		staleTime: 1000 * 60 * 60, // 1 hour in milliseconds
		enabled: !data,
	});

	if (!data) {
		if (status === "pending") {
			return (
				<Stack direction="column" spacing={2}>
					<ProjectSkeleton />
					<ProjectSkeleton />
					<ProjectSkeleton />
					<ProjectSkeleton />
					<ProjectSkeleton />
				</Stack>
			);
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
