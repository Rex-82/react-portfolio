import { useEffect, useState } from "react";

import { useTheme } from "@mui/joy";
import { Typography, CardOverflow, Stack, Chip } from "@mui/joy";

import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import shell from "react-syntax-highlighter/dist/esm/languages/prism/shell-session";
import {
	gruvboxDark,
	gruvboxLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Dotfiles() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const theme = useTheme();

	const url = "https://api.github.com";
	const repo = "Rex-82/dotfiles";
	const branch = "main";

	const files = [
		{ name: ".zsh_aliases", path: ".config/zsh/.zsh_aliases" },
		{ name: ".zsh_exports", path: ".config/zsh/.zsh_exports" },
		{ name: ".zshrc", path: ".config/zsh/.zshrc" },
	];

	useEffect(() => {
		async function fetchData() {
			try {
				const urls = files.map(
					(file) => `${url}/repos/${repo}/contents/${file.path}?ref=${branch}`,
				);

				const responses = await Promise.all(
					urls.map(async (url) => {
						const header = new Headers();
						header.append("Accept", "application/vnd.github.VERSION.raw");

						const options = {
							headers: header,
						};

						const response = await fetch(url, options);
						if (!response.ok) {
							throw new Error(`Failed to fetch: ${response.statusText}`);
						}

						return await response.text();
					}),
				);

				setData(responses);
				setLoading(false);
			} catch (err) {
				setError(err);
				setLoading(false);
			}
		}

		fetchData();
	}, []);

	if (loading) {
		return <Typography>Loading...</Typography>;
	}

	if (error) {
		return <Typography>Error: {error.message}</Typography>;
	}

	return (
		<>
			<Typography level="title1">Dotfiles</Typography>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="stretch"
				spacing={2}
			>
				{data.map((d, i) => (
					<div key={i}>
						<Typography level="callout">{files[i].name}</Typography>

						<CardOverflow value={i} sx={{ justifyContent: "center" }}>
							<SyntaxHighlighter
								showLineNumbers
								clip
								language={shell}
								style={
									theme.palette.mode === "dark" ? gruvboxDark : gruvboxLight
								}
								customStyle={{
									fontSize: theme.fontSize.sm,
									maxWidth: "95%",
									borderRadius: theme.radius.md,
								}}
							>
								{d}
							</SyntaxHighlighter>
						</CardOverflow>
					</div>
				))}
			</Stack>
		</>
	);
}
