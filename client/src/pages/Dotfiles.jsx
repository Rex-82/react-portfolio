import {
	Typography,
	Stack,
	IconButton,
	Tooltip,
	ButtonGroup,
	CardOverflow,
	Divider,
} from "@mui/joy";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState, memo } from "react";

import { OpenInNew, FileCopy } from "@mui/icons-material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { DotfileSkeleton } from "components/Skeletons";

import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import gruvboxDark from "react-syntax-highlighter/dist/esm/styles/prism/gruvbox-dark";
import shellSession from "react-syntax-highlighter/dist/esm/languages/prism/shell-session";
import { useTheme } from "@emotion/react";

SyntaxHighlighter.registerLanguage("shell", shellSession);

const HighlightedCode = memo(function HighlightedCode({ code }) {
	const theme = useTheme();
	return (
		<SyntaxHighlighter
			showLineNumbers
			language="shell"
			style={gruvboxDark}
			customStyle={{
				fontSize: [theme.fontSize.sm],
				borderBottomLeftRadius: [theme.radius.md],
				borderBottomRightRadius: [theme.radius.md],
				width: "100%",
				margin: "0",
			}}
		>
			{code}
		</SyntaxHighlighter>
	);
});

export default function Dotfiles() {
	const queryClient = useQueryClient();

	// State to control when to enable the query
	const [isQueryEnabled, setIsQueryEnabled] = useState(false);

	// useEffect to enable the query on the first render
	useEffect(() => {
		setIsQueryEnabled(true);
	}, []);

	const repo = "Rex-82/dotfiles";
	const branch = "main";

	const files = [
		{ name: ".zsh_aliases", path: ".config/zsh/.zsh_aliases" },
		{ name: ".zsh_exports", path: ".config/zsh/.zsh_exports" },
		{ name: ".zshrc", path: ".config/zsh/.zshrc" },
	];

	const domain = {
		api: "api.github.com",
		http: "www.github.com",
	};

	const urls = files.map(
		(file) =>
			`https://${domain.api}/repos/${repo}/contents/${file.path}?ref=${branch}`,
	);

	// Function to fetch file content
	const fetchFileContent = async (url) => {
		const response = await fetch(url, {
			headers: {
				Accept: "application/vnd.github.VERSION.raw",
			},
		});
		if (!response.ok) {
			throw new Error(`Failed to fetch: ${response.statusText}`);
		}
		return response.text();
	};

	// Check if data is already in cache
	let data = queryClient.getQueryData("dotfilesData");

	// Use useQuery to fetch the data if it's not in cache
	const {
		status,
		data: queryData,
		error,
	} = useQuery({
		queryKey: ["dotfilesData"],
		queryFn: () => Promise.all(urls.map(fetchFileContent)),
		staleTime: 1000 * 60 * 60, // 1 hour in milliseconds
		enabled: isQueryEnabled && !data, // Enable the query based on state
	});

	if (!data) {
		if (status === "pending") {
			return (
				<>
					<Typography level="title1">Dotfiles</Typography>
					<Stack direction="column" spacing={2}>
						<DotfileSkeleton />
						<DotfileSkeleton />
						<DotfileSkeleton />
					</Stack>
				</>
			);
		}
		if (status === "error") {
			return `An error has occurred: ${error.message}`;
		}

		// Save the fetched data to the variable `data`
		data = queryData;
	}
	return (
		<>
			<Typography level="title1" padding="0.5rem">
				Dotfiles
			</Typography>
			<Divider orientation="horizontal" />
			<Typography level="body" padding="0.5rem">
				Below you can find the dotfiles used on my system.
			</Typography>
			<Stack direction="column" spacing={2}>
				{data.map((d, i) => (
					<CardOverflow
						key={i}
						sx={{
							flexDirection: "column",
							alignSelf: "center",
							maxWidth: "95%",
						}}
					>
						<Stack
							direction="row"
							alignItems="center"
							width="100%"
							sx={(theme) => ({
								borderTopRightRadius: [theme.radius.md],
								borderTopLeftRadius: [theme.radius.md],
								backgroundColor: [theme.palette.background.level2],
								paddingLeft: "0.5em",
								paddingRight: "0.625em",
							})}
							justifyContent="space-between"
						>
							<Typography level="callout">{files[i].name}</Typography>
							<ButtonGroup
								size="sm"
								sx={(theme) => ({
									borderRadius: [theme.radius.lg],
								})}
							>
								<Tooltip arrow title="Go to github repository">
									<IconButton
										component="a"
										href={`https://${domain.http}/${repo}/tree/${branch}`}
										target="_blank"
									>
										<OpenInNew />
									</IconButton>
								</Tooltip>
								<CopyToClipboard text={d}>
									<IconButton>
										<FileCopy />
									</IconButton>
								</CopyToClipboard>
							</ButtonGroup>
						</Stack>
						<HighlightedCode code={d} style={{ margin: 0 }} />
					</CardOverflow>
				))}
			</Stack>
		</>
	);
}
