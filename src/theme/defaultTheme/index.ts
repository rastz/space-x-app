import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
	rootSize: 16, //root px size for rem manipulation
	fontFamily: {
		name: "Roboto Mono,  monospace",
		href:
			"https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,700;1,300&display=swap",
	},
	fontSize: {
		tiny: 10,
		small: 12,
		normal: 16,
		large: 24,
		huge: 48,
	},
	fontStyle: {
		italics: "italic",
	},
	fontWeight: {
		light: "300",
		normal: "400",
		bold: "700",
	},
	colors: {
		primary: "#2f353f",
		secondary: "#5a6270",
		tertiary: "#3f20ba",
		white: "#fff",
		black: "#000",
	},
	backgroundColor: {
		primary: "#3f20ba",
		secondary: "#5a6270",
		white: "#fff",
		black: "#000",
	},
};

export default theme;
