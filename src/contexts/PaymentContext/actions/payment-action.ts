/* eslint-disable no-unused-vars */
import { Coffees } from "../context-type";

export enum PaymentActionTypesEnum {
	ADD_COFFEE_TO_CARD = "ADD_COFFEE_TO_CARD",
}

export interface PaymentActionProps {
	type: PaymentActionTypesEnum;
	payload: {
		coffee: Coffees;
	};
}

export function addCoffeToCardAction(coffee: Coffees): PaymentActionProps {
	return {
		type: PaymentActionTypesEnum.ADD_COFFEE_TO_CARD,
		payload: {
			coffee,
		},
	};
}
