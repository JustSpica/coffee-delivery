import React from "react";
import { useQuery } from "react-query";

import { api } from "api";

import { CoffeesRoot } from "./styles";

interface CoffeesListData {
	id: number;
	title: string;
	description: string;
	value: number;
	bannerURL: string;
}

export function Coffees() {
	const { data: coffees } = useQuery<CoffeesListData[]>("coffees", async () => {
		const response = await api.get("/coffees");

		return response.data;
	});

	return (
		<CoffeesRoot>
			<h2>Nossos cafés</h2>
		</CoffeesRoot>
	);
}
