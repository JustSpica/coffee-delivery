import React, { createContext, useContext, useReducer } from "react";

import {
	CoffeeProviderProps,
	CoffeeContextProps,
	Coffees,
} from "./context-type";

import { addCoffeToCardAction } from "./actions/coffee-action";
import { coffeeReducer } from "./reducers/coffee-reducer";

const CoffeeContext = createContext({} as CoffeeContextProps);

export function CoffeeProvider({ children }: CoffeeProviderProps) {
	const [coffees, dispatch] = useReducer(coffeeReducer, []);

	function handleAddCoffeeToCart(coffee: Coffees) {
		dispatch(addCoffeToCardAction(coffee));
	}

	return (
		<CoffeeContext.Provider value={{ coffees, handleAddCoffeeToCart }}>
			{children}
		</CoffeeContext.Provider>
	);
}

export function useCoffeContext() {
	const context = useContext(CoffeeContext);

	return context;
}
