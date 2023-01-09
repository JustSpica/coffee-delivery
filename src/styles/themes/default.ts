export const defaultTheme = {
	colors: {
		"orange-400": "#C47F17",
		"orange-300": "#DBAC2C",
		"orange-100": "#F1E9C9",

		"purple-900": "#4B2995",
		"purple-600": "#8047F8",
		"purple-200": "#EBE5F9",

		"zinc-900": "#272221",
		"zinc-800": "#403937",
		"zinc-700": "#574F4D",
		"zinc-600": "#8D8686",
		"zinc-500": "#D7D5D5",
		"zinc-400": "#E6E5E5",
		"zinc-300": "#EDEDED",
		"zinc-200": "#F3F2F2",
		"zinc-100": "#FAFAFA",

		white: "#FFFFFF",
	},

	fonts: {
		default: "Roboto, sans-serif",
	},

	fontSizes: {
		xs: "0.75rem", // 12px
		sm: "0.875rem", // 14px
		md: "1rem", // 16px
		lg: "1.125rem", // 18px
		xl: "1.25rem", // 20px
		"2xl": "1.5rem", // 24px
		"3xl": "1.875rem", // 30px
		"4xl": "2.25rem", // 36px
		"5xl": "3rem", // 48px
		"6xl": "3.75rem", // 60px
		"7xl": "4.5rem", // 72px
		"8xl": "6rem", // 96px
		"9xl": "8rem", // 128px
	},

	fontWeights: {
		light: 300,
		regular: 400,
		semiBold: 600,
		bold: 700,
		extraBold: 800,
	},

	lineHeights: {
		base: 1,
		xs: "1rem;", // 16px
		sm: "1.25rem", // 20px
		md: "1.5rem", // 24px
		lg: "1.75rem", // 28px
		xl: "2rem", // 32px
		"2xl": "2.25rem", // 36px
		"3xl": "2.5rem", // 40px
	},

	space: {
		0: "0rem", // 0px
		0.5: "0.125rem", // 2px
		1: "0.25rem", // 4px
		1.5: "0.375rem", // 6px
		2: "0.5rem", // 8px
		2.5: "0.625rem", // 10px
		3: "0.75rem", // 12px
		3.5: "0.875rem", // 14px
		4: "1rem", // 16px
		5: "1.25rem", // 20px
		6: "1.5rem", // 24px
		7: "1.75rem", // 28px
		8: "2rem", // 32px
		9: "2.25rem", // 36px
		10: "2.5rem", // 40px
		12: "3rem", // 48px
		14: "3.5rem", // 56px
		16: "4rem", // 64px
		20: "5rem", // 80px
		24: "6rem", // 96px
		32: "8rem", // 128px
		40: "10rem", // 160px
		64: "16rem", // 256px
		80: "20rem", // 320px
	},

	rounded: {
		none: "0px",
		xs: "2px",
		sm: "4px",
		md: "6px",
		lg: "8px",
		xl: "12px",
		"2xl": "16px",
		"3xl": "24px",
		full: "9999px",
	},

	border: {
		0: "0px",
		1: "1px",
		2: "2px",
		4: "4px",
		8: "8px",
	},

	opacity: {
		0: "0",
		5: "0.05",
		10: "0.1",
		20: "0.2",
		25: "0.25",
		30: "0.3",
		40: "0.4",
		50: "0.5",
		60: "0.6",
		70: "0.7",
		75: "0.75",
		80: "0.8",
		90: "0.9",
		95: "0.95",
		100: "1",
	},

	media: {
		mobile: `@media (max-width: 468px)`,
		tablet: `@media (max-width: 768px)`,
		laptop: `@media (max-width: 1366px)`,
	},

	utils: {
		px: (value: string) => `
			padding-left: ${value};
			padding-right: ${value};
		`,
		py: (value: string) => `
			padding-top: ${value};
			padding-bottom: ${value};
		`,
		mx: (value: string) => `
			margin-left: ${value};
			margin-right: ${value};
		`,
		my: (value: string) => `
			margin-top: ${value};
			margin-bottom: ${value};
		`,
	},
} as const;
