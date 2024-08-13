import { extendTheme } from "@mui/joy";

const CustomTheme = extendTheme({
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
