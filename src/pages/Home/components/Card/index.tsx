import React, { useState } from "react";
import { ShoppingCartSimple } from "phosphor-react";

import { ActionCount } from "components";

import { CardAction, CardRoot } from "./styles";

export interface CardCoffeesProps {
	amount: number;
	description: string;
	image: string;
	title: string;
}

export function Card({ amount, description, image, title }: CardCoffeesProps) {
	const [valueAmount, setValueAmount] = useState(amount);
	const [coffeeCount, setCoffeeCount] = useState(1);

	function handleIncrementCoffeeCount() {
		if (coffeeCount === 10) return;

		setValueAmount(amount * (coffeeCount + 1));
		setCoffeeCount(prevState => prevState + 1);
	}

	function handleReductionCoffeeCount() {
		if (coffeeCount === 1) return;

		setValueAmount(amount * (coffeeCount - 1));
		setCoffeeCount(prevState => prevState - 1);
	}

	return (
		<CardRoot>
			<img src={image} />
			<strong className="titleCard">{title}</strong>
			<span className="descriptionCard">{description}</span>
			<CardAction>
				<strong>
					{new Intl.NumberFormat("pt-BR", {
						style: "currency",
						currency: "BRL",
					}).format(valueAmount)}
				</strong>
				<div className="actionButtons">
					<ActionCount
						onMinus={handleReductionCoffeeCount}
						onPlus={handleIncrementCoffeeCount}
					>
						{coffeeCount}
					</ActionCount>
					<button>
						<ShoppingCartSimple size={22} weight="bold" />
					</button>
				</div>
			</CardAction>
		</CardRoot>
	);
}
