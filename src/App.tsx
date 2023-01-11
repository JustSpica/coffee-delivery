import React from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";

import { queryClient } from "api/query";

import { CoffeeProvider } from "contexts/CoffeeContext";

import { Router } from "routes";

import GlobalStyles from "styles/global";
import { defaultTheme } from "styles/themes/default";

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<CoffeeProvider>
						<Router />
						<GlobalStyles />
					</CoffeeProvider>
				</BrowserRouter>
			</QueryClientProvider>
		</ThemeProvider>
	);
}

export default App;
