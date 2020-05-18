import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import theme from "./theme/defaultTheme";

ReactDOM.render(
	<React.StrictMode>
		<App theme={theme} />
	</React.StrictMode>,
	document.getElementById("root")
);
