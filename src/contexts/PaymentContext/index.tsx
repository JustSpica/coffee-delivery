import React, { createContext, useContext, useReducer } from "react";

import {
	PaymentProviderProps,
	PaymentContextProps,
	CoffeesCart,
} from "./context-type";

import {
	addCoffeeToCardAction,
	incrementCoffeeAmountAction,
	reductionCoffeeAmountAction,
	removeCoffeToCardAction,
} from "./actions/payment-action";
import { paymentReducer } from "./reducers/payment-reducer";

const PaymentContext = createContext({} as PaymentContextProps);

export function PaymentProvider({ children }: PaymentProviderProps) {
	const [coffeesCart, dispatch] = useReducer(paymentReducer, []);

	function handleAddCoffeeToCart(coffee: CoffeesCart) {
		dispatch(addCoffeeToCardAction(coffee));
	}

	function handleDeleteCoffeeToCart(title: string) {
		dispatch(removeCoffeToCardAction(title));
	}

	function handleIncrementCoffeeAmount(title: string) {
		dispatch(incrementCoffeeAmountAction(title));
	}

	function handleReductionCoffeeAmount(title: string) {
		dispatch(reductionCoffeeAmountAction(title));
	}

	return (
		<PaymentContext.Provider
			value={{
				coffeesCart,
				handleAddCoffeeToCart,
				handleIncrementCoffeeAmount,
				handleReductionCoffeeAmount,
				handleDeleteCoffeeToCart,
			}}
		>
			{children}
		</PaymentContext.Provider>
	);
}

export function usePaymentContext() {
	const context = useContext(PaymentContext);

	return context;
}
