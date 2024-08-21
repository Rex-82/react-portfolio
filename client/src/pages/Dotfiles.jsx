import {
	Typography,
	Stack,
	IconButton,
	Tooltip,
	ButtonGroup,
	CardOverflow,
} from "@mui/joy";
import { useQueries, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState, memo, useCallback } from "react";

import { OpenInNew, FileCopy } from "@mui/icons-material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { DotfileSkeleton } from "components/Skeletons";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
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

export default function Dotfiles({ children }) {
	const queryClient = useQueryClient();

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

	const urls = files.map((file, i) => ({
		url: `https://${domain.api}/repos/${repo}/contents/${file.path}?ref=${branch}`,
		isCached: queryClient.getQueryData(`dotfile-${i}`),
	}));

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

	const codeQueries = useQueries({
		queries: urls.map((url, i) => {
			return {
				queryKey: ["dotfile", i],
				queryFn: async () => await fetchFileContent(url.url),
				staleTime: 1000 * 60 * 60, // 1 hour in milliseconds
				enabled: url.isCached,
			};
		}),
		combine: (results) => {
			console.log("results:", results);

			return results.map((res) => ({ data: res.data, status: res.status }));
		},
	});

	return (
		<>
			{children}
			<Stack direction="column" spacing={2}>
				{codeQueries?.map((d, i) => {
					if (d.status === "pending") {
						return <DotfileSkeleton key={i} />;
					}
					if (d.status === "error") {
						return `An error has occurred: ${d.error.message}`;
					}

					if (d.status === "success") {
						return (
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
										<CopyToClipboard text={d.data}>
											<Tooltip arrow title="Copy to clipboard">
												<IconButton>
													<FileCopy />
												</IconButton>
											</Tooltip>
										</CopyToClipboard>
									</ButtonGroup>
								</Stack>
								<HighlightedCode code={d.data} style={{ margin: 0 }} />
							</CardOverflow>
						);
					}
				})}
			</Stack>
		</>
	);
}
