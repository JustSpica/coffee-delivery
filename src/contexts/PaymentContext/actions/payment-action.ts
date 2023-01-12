/* eslint-disable no-unused-vars */
import { CoffeesCart } from "../context-type";

export enum PaymentActionTypesEnum {
	ADD_COFFEE_TO_CARD = "ADD_COFFEE_TO_CARD",
	INCREMENT_COFFEE_AMOUNT = "INCREMENT_COFFEE_AMOUNT",
	REDUCTION_COFFEE_AMOUNT = "REDUCTION_COFFEE_AMOUNT",
	REMOVE_COFFEE_TO_CART = "REMOVE_COFFEE_TO_CART",
}

export interface PaymentActionProps {
	type: PaymentActionTypesEnum;
	payload: {
		coffeesCart: CoffeesCart;
		title: string;
	};
}

export function addCoffeeToCardAction(coffeesCart: CoffeesCart) {
	return {
		type: PaymentActionTypesEnum.ADD_COFFEE_TO_CARD,
		payload: {
			coffeesCart,
		},
	} as PaymentActionProps;
}

export function removeCoffeToCardAction(title: string) {
	return {
		type: PaymentActionTypesEnum.REMOVE_COFFEE_TO_CART,
		payload: {
			title,
		},
	} as PaymentActionProps;
}

export function incrementCoffeeAmountAction(title: string) {
	return {
		type: PaymentActionTypesEnum.INCREMENT_COFFEE_AMOUNT,
		payload: {
			title,
		},
	} as PaymentActionProps;
}

export function reductionCoffeeAmountAction(title: string) {
	return {
		type: PaymentActionTypesEnum.REDUCTION_COFFEE_AMOUNT,
		payload: {
			title,
		},
	} as PaymentActionProps;
}
