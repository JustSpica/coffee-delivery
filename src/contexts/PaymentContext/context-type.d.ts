import React from "react";

export interface Coffees {
	amount: number;
	baseAmount: number;
	count: number;
	image: string;
	title: string;
}

export interface PaymentContextProps {
	coffees: Coffees[];
	handleAddCoffeeToCart: (coffee: Coffees) => void;
	handleIncrementCoffeeAmount: (title: string) => void;
	handleReductionCoffeeAmount: (title: string) => void;
}

export interface PaymentProviderProps {
	children: React.ReactNode;
}
