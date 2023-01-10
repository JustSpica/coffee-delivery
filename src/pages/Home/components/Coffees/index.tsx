import React from "react";
import { useQuery } from "react-query";

import { api } from "api";

import { CoffeesRoot } from "./styles";

import { Card } from "../Card";

interface CoffeesListData {
	id: number;
	title: string;
	description: string;
	value: number;
	bannerURL: string;
}

export function Coffees() {
	const { data: coffees } = useQuery<CoffeesListData[]>(
		"coffees",
		async () => {
			const response = await api.get("/coffees");

			return response.data;
		},
		{
			refetchOnWindowFocus: false,
		},
	);

	return (
		<CoffeesRoot>
			<h2>Nossos cafés</h2>
			<section>
				{coffees?.map(coffee => (
					<Card
						key={coffee.id}
						description={coffee.description}
						image={coffee.bannerURL}
						title={coffee.title}
						amount={coffee.value}
					/>
				))}
			</section>
		</CoffeesRoot>
	);
}
