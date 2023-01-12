import React, { createContext, useContext, useReducer, useState } from "react";

import {
	PaymentProviderProps,
	PaymentContextProps,
	CoffeesCart,
	UserData,
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
	const [userData, setUserData] = useState<UserData>({} as UserData);

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

	function handleSaveUserData(user: UserData) {
		setUserData(user);
	}

	return (
		<PaymentContext.Provider
			value={{
				coffeesCart,
				userData,
				handleAddCoffeeToCart,
				handleIncrementCoffeeAmount,
				handleReductionCoffeeAmount,
				handleDeleteCoffeeToCart,
				handleSaveUserData,
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
