declare namespace Theme {
	type rootSize = number;

	interface FontFamily {
		name: string;
		href: string;
	}

	interface FontSize {
		[key: string]: number;
	}

	interface FontStyleType {
		italics: string;
	}

	interface FontWeightType {
		light: string;
		normal: string;
		bold: string;
	}

	interface BasicColorType {
		white: "#fff";
		black: "#000";
	}

	interface Colors extends BasicColorType {
		primary: string;
		secondary: string;
		tertiary: string;
	}

	interface BackgroundColorType extends BasicColorType {
		primary: string;
		secondary: string;
	}
}

export default Theme;
