import { extendTheme } from "@mui/joy";

const CustomTheme = extendTheme({
	colorSchemes: {
		light: {
			palette: {
				primary: {
					50: "#fff8e1",
					100: "#ffecb3",
					200: "#ffe082",
					300: "#ffd54f",
					400: "#ffca28",
					500: "#ffc107",
					600: "#ffb300",
					700: "#ffa000",
					800: "#ff8f00",
					900: "#ff6f00",
				},
				neutral: {
					50: "#fafafa",
					100: "#f5f5f5",
					200: "#e5e5e5",
					300: "#d4d4d4",
					400: "#a3a3a3",
					500: "#737373",
					600: "#525252",
					700: "#404040",
					800: "#262626",
					900: "#171717",
				},
				danger: {
					50: "#ffebee",
					100: "#ffcdd2",
					200: "#ef9a9a",
					300: "#e57373",
					400: "#ef5350",
					500: "#f44336",
					600: "#e53935",
					700: "#d32f2f",
					800: "#c62828",
					900: "#b71c1c",
				},
				success: {
					50: "#f1f8e9",
					100: "#dcedc8",
					200: "#c5e1a5",
					300: "#aed581",
					400: "#9ccc65",
					500: "#8bc34a",
					600: "#7cb342",
					700: "#689f38",
					800: "#558b2f",
					900: "#33691e",
				},
				warning: {
					50: "#fff3e0",
					100: "#ffe0b2",
					200: "#ffcc80",
					300: "#ffb74d",
					400: "#ffa726",
					500: "#ff9800",
					600: "#fb8c00",
					700: "#f57c00",
					800: "#ef6c00",
					900: "#e65100",
				},
			},
		},
		dark: {
			palette: {
				primary: {
					50: "#fff8e1",
					100: "#ffecb3",
					200: "#ffe082",
					300: "#ffd54f",
					400: "#ffca28",
					500: "#ffc107",
					600: "#ffb300",
					700: "#ffa000",
					800: "#ff8f00",
					900: "#ff6f00",
				},
				neutral: {
					50: "#fafafa",
					100: "#f5f5f5",
					200: "#e5e5e5",
					300: "#d4d4d4",
					400: "#a3a3a3",
					500: "#737373",
					600: "#525252",
					700: "#404040",
					800: "#262626",
					900: "#171717",
				},
			},
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 768,
			lg: 1025,
			xl: 1536,
		},
	},
	components: {
		JoyTypography: {
			defaultProps: {
				level: "body",
				levelMapping: {
					largeTitle: "h1",
					title1: "h1",
					title2: "h2",
					title3: "h3",
					headline: "h4",
					body: "p",
					callout: "div",
					subheadline: "div",
					footnote: "p",
					caption1: "p",
					caption2: "p",
				},
			},
		},
		JoySkeleton: {
			defaultProps: {
				animation: "pulse",
			},
		},
	},
	typography: {
		display1: undefined,
		display2: undefined,
		h1: undefined,
		h2: undefined,
		h3: undefined,
		h4: undefined,
		h5: undefined,
		h6: undefined,
		body1: undefined,
		body2: undefined,
		body3: undefined,
		body4: undefined,
		body5: undefined,
		largeTitle: {
			fontSize: "34px",
			lineHeight: "41px",
		},
		title1: {
			fontSize: "28px",
			lineHeight: "34px",
		},
		title2: {
			fontSize: "22px",
			lineHeight: "28px",
		},
		title3: {
			fontSize: "20px",
			lineHeight: "24px",
		},
		headline: {
			fontSize: "17px",
			lineHeight: "22px",
			fontWeight: "600",
		},
		body: {
			fontSize: "17px",
			lineHeight: "22px",
		},
		callout: {
			fontSize: "16px",
			lineHeight: "22px",
		},
		subheadline: {
			fontSize: "15px",
			lineHeight: "18px",
		},
		footnote: {
			fontSize: "14px",
			lineHeight: "18px",
		},
		caption1: {
			fontSize: "12px",
			lineHeight: "16px",
		},
		caption2: {
			fontSize: "11px",
			lineHeight: "13px",
		},
	},
});

export default CustomTheme;
