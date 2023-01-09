import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Router } from "routes";

import GlobalStyles from "styles/global";
import { defaultTheme } from "styles/themes/default";

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<Router />
				<GlobalStyles />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
