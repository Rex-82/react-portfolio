import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

export default function queryData(key, endpoint, options = {}) {
	const queryClient = useQueryClient();

	return useQuery({
		queryKey: key,
		queryFn: async () => {
			const response = await fetch(endpoint, options);
			if (!response.ok) {
				throw new Error(`Error: ${response.status} ${response.statusText}`);
			}

			const contentType = response.headers.get("content-type");

			if (contentType?.includes("application/json"))
				return await response.json();
			return await response.text();
		},
		queryClient,
	});
}
