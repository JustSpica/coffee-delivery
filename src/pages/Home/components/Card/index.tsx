import React, { useState } from "react";
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";

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
		setValueAmount(amount * (coffeeCount + 1));
		setCoffeeCount(prevState => prevState + 1);
	}

	function handleReductionCoffeeCount() {
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
					<div className="countActions">
						<button onClick={handleReductionCoffeeCount}>
							<Minus size={14} weight="fill" />
						</button>
						<span>{coffeeCount}</span>
						<button onClick={handleIncrementCoffeeCount}>
							<Plus size={14} weight="bold" />
						</button>
					</div>
					<button>
						<ShoppingCartSimple size={22} weight="bold" />
					</button>
				</div>
			</CardAction>
		</CardRoot>
	);
}
