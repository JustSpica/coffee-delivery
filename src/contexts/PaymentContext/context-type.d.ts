import React from "react";

export interface CoffeesCart {
	amount: number;
	baseAmount: number;
	count: number;
	image: string;
	title: string;
}

export interface PaymentContextProps {
	coffeesCart: CoffeesCart[];
	handleAddCoffeeToCart: (coffee: CoffeesCart) => void;
	handleIncrementCoffeeAmount: (title: string) => void;
	handleReductionCoffeeAmount: (title: string) => void;
	handleDeleteCoffeeToCart: (title: string) => void;
}

export interface PaymentProviderProps {
	children: React.ReactNode;
}
