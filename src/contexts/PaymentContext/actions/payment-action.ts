/* eslint-disable no-unused-vars */
import { Coffees } from "../context-type";

export enum PaymentActionTypesEnum {
	ADD_COFFEE_TO_CARD = "ADD_COFFEE_TO_CARD",
	INCREMENT_COFFEE_AMOUNT = "INCREMENT_COFFEE_AMOUNT",
	REDUCTION_COFFEE_AMOUNT = "REDUCTION_COFFEE_AMOUNT",
}

export interface PaymentActionProps {
	type: PaymentActionTypesEnum;
	payload: {
		coffee: Coffees;
		title: string;
	};
}

export function addCoffeToCardAction(coffee: Coffees) {
	return {
		type: PaymentActionTypesEnum.ADD_COFFEE_TO_CARD,
		payload: {
			coffee,
		},
	} as PaymentActionProps;
}

export function incrementCoffeeAmount(title: string) {
	return {
		type: PaymentActionTypesEnum.INCREMENT_COFFEE_AMOUNT,
		payload: {
			title,
		},
	} as PaymentActionProps;
}

export function reductionCoffeeAmount(title: string) {
	return {
		type: PaymentActionTypesEnum.REDUCTION_COFFEE_AMOUNT,
		payload: {
			title,
		},
	} as PaymentActionProps;
}
