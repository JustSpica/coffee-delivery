import React from "react";

export interface Coffees {
	image: string;
	title: string;
	count: number;
	amount: number;
}

export interface PaymentContextProps {
	coffees: Coffees[];
	handleAddCoffeeToCart: (coffee: Coffees) => void;
}

export interface PaymentProviderProps {
	children: React.ReactNode;
}
