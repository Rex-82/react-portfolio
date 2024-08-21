import {
	Box,
	CardOverflow,
	Card,
	Link,
	Typography,
	Stack,
	Skeleton,
	ButtonGroup,
	IconButton,
} from "@mui/joy";
import { OpenInNew, FileCopy } from "@mui/icons-material";

//.element::before {
//    content: '';
//    position: absolute;
//    inset: 0;
//    transform: translateX(-100%);
//    animation: shimmer 2s infinite;
//    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.6), transparent);
//}

import PageDesc from "./PageDesc";

export function ProjectSkeleton() {
	return (
		<Card>
			<Skeleton
				variant="rectangular"
				width="100%"
				height="1.25rem"
				sx={(theme) => ({ borderRadius: [theme.radius.xs] })}
			/>
			<Skeleton
				variant="rectangular"
				width="30%"
				height="1.25rem"
				sx={(theme) => ({ borderRadius: [theme.radius.xs] })}
			/>
			<Stack direction="row" spacing={1}>
				<Skeleton
					variant="rectangular"
					width="2em"
					height="1.5em"
					sx={(theme) => ({ borderRadius: [theme.radius.lg] })}
				/>
				<Skeleton
					variant="rectangular"
					width="5em"
					height="1.5em"
					sx={(theme) => ({ borderRadius: [theme.radius.lg] })}
				/>
				<Skeleton
					variant="rectangular"
					width="3em"
					height="1.5em"
					sx={(theme) => ({ borderRadius: [theme.radius.lg] })}
				/>
				<Skeleton
					variant="rectangular"
					width="7em"
					height="1.5em"
					sx={(theme) => ({ borderRadius: [theme.radius.lg] })}
				/>
			</Stack>
		</Card>
	);
}

export function DotfileSkeleton() {
	const templateCode = [
		"function lorem(ipsum, dolor = 1) {",
		"  const sit = ipsum == null ? 0 : ipsum.sit;",
		"  dolor = sit - amet(dolor);",
		"  return sit ? consectetur(ipsum, 0, dolor < 0 ? 0 : dolor) : [];",
		"",
		"function adipiscing(...elit) {",
		"  if (!elit.sit) {",
		"    return [];",
		"",
		"  const sed = elit[0];",
		"  return eiusmod.tempor(sed) ? sed : [sed];",
		"",
		"",
		"function incididunt(ipsum, ut = 1) {",
		"  ut = labore.et(amet(ut), 0);",
		"  const sit = ipsum == null ? 0 : ipsum.sit;",
		"  if (!sit || ut < 1) {",
		"    return [];",
		"",
		"  let dolore = 0;",
		"  let magna = 0;",
		"  const aliqua = new eiusmod(labore.ut(sit / ut));",
		"  while (dolore < sit) {",
		"    aliqua[magna++] = consectetur(ipsum, dolore, (dolore += ut));",
		"",
		"  return aliqua;",
		"",
		"",
		"function incididunt(ipsum, ut = 1) {",
		"  ut = labore.et(amet(ut), 0);",
		"  const sit = ipsum == null ? 0 : ipsum.sit;",
		"  if (!sit || ut < 1) {",
		"    return [];",
		"",
		"  let dolore = 0;",
		"  let magna = 0;",
		"  const aliqua = new eiusmod(labore.ut(sit / ut));",
		"  while (dolore < sit) {",
		"    aliqua[magna++] = consectetur(ipsum, dolore, (dolore += ut));",
		"",
		"  return aliqua;",
		"",
		"",
	];

	return (
		<CardOverflow
			sx={{
				flexDirection: "column",
				alignSelf: "center",
				width: "95%",
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
					padding: "0 0.5em",
				})}
				justifyContent="space-between"
			>
				<Skeleton
					variant="rectangular"
					width="5em"
					height="1em"
					sx={(theme) => ({
						borderRadius: [theme.radius.sm],
						opacity: "60%",
					})}
				/>
				<ButtonGroup
					size="sm"
					sx={(theme) => ({
						borderRadius: [theme.radius.lg],
					})}
				>
					<IconButton>
						<OpenInNew />
					</IconButton>
					<IconButton>
						<FileCopy />
					</IconButton>
				</ButtonGroup>
			</Stack>
			<Box
				sx={(theme) => ({
					backgroundColor: [theme.palette.background.level1],
					paddingLeft: "1em",
					paddingTop: "0.7em",
				})}
			>
				{templateCode.map((line, i) =>
					line === "" ? (
						<Box height="1em" sx={{ paddingBottom: "0.5em" }} key={i} />
					) : (
						<Typography
							sx={{ paddingBottom: "0.5em" }}
							key={i}
							level="caption1"
						>
							<Skeleton>{line}</Skeleton>
						</Typography>
					),
				)}
			</Box>
		</CardOverflow>
	);
}
