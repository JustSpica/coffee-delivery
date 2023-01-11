import React, { createContext, useContext, useReducer } from "react";

import {
	PaymentProviderProps,
	PaymentContextProps,
	Coffees,
} from "./context-type";

import { addCoffeToCardAction } from "./actions/payment-action";
import { paymentReducer } from "./reducers/payment-reducer";

const PaymentContext = createContext({} as PaymentContextProps);

export function PaymentProvider({ children }: PaymentProviderProps) {
	const [coffees, dispatch] = useReducer(paymentReducer, []);

	function handleAddCoffeeToCart(coffee: Coffees) {
		dispatch(addCoffeToCardAction(coffee));
	}

	return (
		<PaymentContext.Provider value={{ coffees, handleAddCoffeeToCart }}>
			{children}
		</PaymentContext.Provider>
	);
}

export function usePaymentContext() {
	const context = useContext(PaymentContext);

	return context;
}
