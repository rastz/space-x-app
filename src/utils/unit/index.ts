import theme from "../../theme/defaultTheme";

function unit(pxval: number): string {
	const remVal: number = pxval / theme.rootSize;

	return `${remVal}rem`;
}

export default unit;
