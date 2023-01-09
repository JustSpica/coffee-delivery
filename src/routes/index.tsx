import React from "react";
import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "layouts/DefaultLayout";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" />
				<Route path="/checkout" />
				<Route path="/success" />
			</Route>
		</Routes>
	);
}
