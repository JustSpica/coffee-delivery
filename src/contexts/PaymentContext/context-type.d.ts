import React from "react";

export interface CoffeesCart {
	amount: number;
	baseAmount: number;
	count: number;
	image: string;
	title: string;
}

export interface UserData {
	cep: string;
	city: string;
	complement?: string;
	district: string;
	houseNumber: string;
	paymentType: "credit" | "debit" | "money";
	state: string;
	street: string;
}

export interface PaymentContextProps {
	coffeesCart: CoffeesCart[];
	userData: UserData;
	handleAddCoffeeToCart: (coffee: CoffeesCart) => void;
	handleIncrementCoffeeAmount: (title: string) => void;
	handleReductionCoffeeAmount: (title: string) => void;
	handleDeleteCoffeeToCart: (title: string) => void;
	handleSaveUserData: (user: UserData) => void;
}

export interface PaymentProviderProps {
	children: React.ReactNode;
}
