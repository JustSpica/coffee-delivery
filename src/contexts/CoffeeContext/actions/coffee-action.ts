/* eslint-disable no-unused-vars */
import { Coffees } from "../context-type";

export enum CoffeActionTypesEnum {
	ADD_COFFEE_TO_CARD = "ADD_COFFEE_TO_CARD",
}

export interface CoffeActionProps {
	type: CoffeActionTypesEnum;
	payload: {
		coffee: Coffees;
	};
}

export function addCoffeToCardAction(coffee: Coffees): CoffeActionProps {
	return {
		type: CoffeActionTypesEnum.ADD_COFFEE_TO_CARD,
		payload: {
			coffee,
		},
	};
}
