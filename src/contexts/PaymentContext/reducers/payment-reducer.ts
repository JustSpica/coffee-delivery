import {
	PaymentActionProps,
	PaymentActionTypesEnum,
} from "../actions/payment-action";

import { Coffees } from "../context-type";

export function paymentReducer(state: Coffees[], action: PaymentActionProps) {
	const { type, payload } = action;

	switch (type) {
		case PaymentActionTypesEnum.ADD_COFFEE_TO_CARD:
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
