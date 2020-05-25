import "styled-components";
import Theme from "../typings/theme";

declare module "styled-components" {
	export interface DefaultTheme {
		rootSize: Theme.rootSize;
		fontFamily: Theme.FontFamily;
		fontSize: Theme.FontSize;
		fontStyle: Theme.FontStyleType;
		fontWeight: Theme.FontWeightType;
		colors: Theme.Colors;
		backgroundColor: Theme.BackgroundColorType;
	}
}
