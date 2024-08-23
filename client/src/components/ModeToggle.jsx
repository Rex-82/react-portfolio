import { useColorScheme } from "@mui/joy/styles";
import { Radio, RadioGroup } from "@mui/joy";
import {
	LightModeOutlined,
	ModeNightOutlined,
	DesktopWindowsOutlined,
} from "@mui/icons-material";

export default function ModeToggle() {
	const { mode, setMode } = useColorScheme();

	const states = [
		{
			name: "light",
			icon: <LightModeOutlined />,
		},
		{
			name: "dark",
			icon: <ModeNightOutlined />,
		},
		{
			name: "system",
			icon: <DesktopWindowsOutlined />,
		},
	];

	return (
		<RadioGroup
			orientation="horizontal"
			aria-labelledby="theme mode selector"
			name="mode"
			value={mode}
			onChange={(event) => setMode(event.target.value)}
			sx={(theme) => ({
				borderRadius: "2rem",
				height: "1.5rem",
				bgcolor: theme.palette.background.surface,
				display: "flex",
				alignItems: "center",
				py: "0.75em",
			})}
			variant="outlined"
			size="sm"
		>
			{states.map((item) => (
				<Radio
					key={item.name}
					color="neutral"
					value={item.name}
					uncheckedIcon={item.icon}
					checkedIcon={item.icon}
					variant="plain"
					size="sm"
					sx={(theme) => ({
						padding: "0.125em",
						margin: "0.325em",
						"& .MuiSvgIcon-root": {
							transition: "color 0.3s",
							color: theme.palette.neutral.solidDisabledColor,
						},
						"&:hover .MuiSvgIcon-root": {
							color: theme.palette.text.primary,
						},
						"&.Mui-checked .MuiSvgIcon-root": {
							color: theme.palette.text.primary,
						},
					})}
					slotProps={{
						action: ({ checked }) => ({
							sx: (theme) => ({
								borderRadius: "1rem",
								height: "1.25rem",
								width: "1.25rem",
								...(checked && {
									bgcolor: theme.palette.neutral.solidBg,
									opacity: "40%",
								}),
							}),
						}),
					}}
				/>
			))}
		</RadioGroup>
	);
}
