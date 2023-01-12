import { produce } from "immer";

import {
	PaymentActionProps,
	PaymentActionTypesEnum,
} from "../actions/payment-action";

import { CoffeesCart } from "../context-type";

export function paymentReducer(
	state: CoffeesCart[],
	action: PaymentActionProps,
) {
	const { type, payload } = action;

	switch (type) {
		case PaymentActionTypesEnum.ADD_COFFEE_TO_CARD:
			return [
				...state.filter(coffee => {
					return coffee.title !== payload.coffeesCart.title;
				}),
				payload.coffeesCart,
			];
		case PaymentActionTypesEnum.INCREMENT_COFFEE_AMOUNT: {
			const currentCoffeeIndex = state.findIndex(coffee => {
				return coffee.title === payload.title;
			});

			if (currentCoffeeIndex < 0) {
				return state;
			}

			return produce(state, draft => {
				const newCount = draft[currentCoffeeIndex].count + 1;

				draft[currentCoffeeIndex].count += 1;
				draft[currentCoffeeIndex].amount =
					draft[currentCoffeeIndex].baseAmount * newCount;
			});
		}
		case PaymentActionTypesEnum.REDUCTION_COFFEE_AMOUNT: {
			const currentCoffeeIndex = state.findIndex(coffee => {
				return coffee.title === payload.title;
			});

			if (currentCoffeeIndex < 0) {
				return state;
			}

			return produce(state, draft => {
				const newCount = draft[currentCoffeeIndex].count - 1;

				if (newCount === 0) {
					return draft;
				} else {
					draft[currentCoffeeIndex].count -= 1;
					draft[currentCoffeeIndex].amount =
						draft[currentCoffeeIndex].baseAmount * newCount;
				}
			});
		}
		case PaymentActionTypesEnum.REMOVE_COFFEE_TO_CART:
			return produce(state, draft => {
				return draft.filter(coffee => coffee.title !== payload.title);
			});
		default:
			return state;
	}
}
