import React, { ReactElement } from "react";
import { createGlobalStyle, DefaultTheme, ThemeProvider } from "styled-components";

interface Props {
	theme: DefaultTheme;
}

const GlobalStyles = createGlobalStyle`
	* {
		font-family: inherit;

		&,
		&::before,
		&::after {
			box-sizing: border-box;
		}
	}

	body {
		
		font-family: ${(props) => props.theme.fontFamily.name}
	}
`;

function App({ theme }: Props): ReactElement<Props> {
	return (
		<ThemeProvider theme={theme}>
			<link href={theme.fontFamily.href} rel="stylesheet" type="text/css" />
			<GlobalStyles />
			<h1>hello darkness my old friend!</h1>
		</ThemeProvider>
	);
}

export default App;
