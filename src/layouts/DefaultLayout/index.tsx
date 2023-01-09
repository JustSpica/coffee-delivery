import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "components";

import { DefaultLayoutRoot } from "./styles";

export function DefaultLayout() {
	return (
		<DefaultLayoutRoot>
			<Header />
			<Outlet />
		</DefaultLayoutRoot>
	);
}
