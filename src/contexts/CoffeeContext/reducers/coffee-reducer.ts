import {
	CoffeActionProps,
	CoffeActionTypesEnum,
} from "../actions/coffee-action";

import { Coffees } from "../context-type";

export function coffeeReducer(state: Coffees[], action: CoffeActionProps) {
	const { type, payload } = action;

	switch (type) {
		case CoffeActionTypesEnum.ADD_COFFEE_TO_CARD:
			return [
				...state.filter(coffee => {
					return coffee.title !== payload.coffee.title;
				}),
				payload.coffee,
			];

		default:
			return state;
	}
}
