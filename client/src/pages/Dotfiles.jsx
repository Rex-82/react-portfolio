import { Typography, CardOverflow, Stack } from "@mui/joy";
import { useEffect, useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import shell from "react-syntax-highlighter/dist/esm/languages/prism/shell-session";
import {
	gruvboxDark,
	gruvboxLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useTheme } from "@mui/joy";

export default function Dotfiles() {
	const [data, setData] = useState([]);

	const theme = useTheme();

	const url = "https://api.github.com";

	const repo = "Rex-82/dotfiles";
	const branch = "main";

	const files = [
		{ name: ".zsh_aliases", path: ".config/zsh/.zsh_aliases" },
		{ name: ".zsh_exports", path: ".config/zsh/.zsh_exports" },
		{ name: ".zshrc", path: ".config/zsh/.zshrc" },
	];

	async function fetchFile(url) {
		const myHeaders = new Headers();
		myHeaders.append("Accept", "application/vnd.github.VERSION.raw");

		const requestOptions = {
			method: "GET",
			headers: myHeaders,
			redirect: "follow",
		};
		try {
			const response = await fetch(url, requestOptions);
			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`);
			}
			const body = await response.text();
			return body;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	useEffect(() => {
		async function fetchData() {
			const urls = files.map(
				(file) => `${url}/repos/${repo}/contents/${file.path}?ref=${branch}`,
			);

			const codes = await Promise.all(urls.map(fetchFile));
			setData(codes);
		}

		fetchData();
	}, []);

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
					<>
						<Typography key={i} level="callout">
							{files[i].name}
						</Typography>
						<CardOverflow value={i} key={i}>
							<SyntaxHighlighter
								showInlineLineNumbers
								showLineNumbers
								language={shell}
								style={
									theme.palette.mode === "dark" ? gruvboxDark : gruvboxLight
								}
							>
								{d}
							</SyntaxHighlighter>
						</CardOverflow>
					</>
				))}
			</Stack>
		</>
	);
}
