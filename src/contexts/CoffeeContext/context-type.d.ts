import React from "react";

export interface Coffees {
	image: string;
	title: string;
	count: number;
	amount: number;
}

export interface CoffeeContextProps {
	coffees: Coffees[];
	handleAddCoffeeToCart: (coffee: Coffees) => void;
}

export interface CoffeeProviderProps {
	children: React.ReactNode;
}
