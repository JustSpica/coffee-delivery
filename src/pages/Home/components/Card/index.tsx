import React, { useState } from "react";
import { Check, ShoppingCartSimple } from "phosphor-react";

import { ActionCount } from "components";

import { CardAction, CardRoot, CartButton, Toast } from "./styles";

export interface CardCoffeesProps {
	amount: number;
	description: string;
	image: string;
	title: string;
}

export function Card({ amount, description, image, title }: CardCoffeesProps) {
	const [valueAmount, setValueAmount] = useState(amount);
	const [coffeeCount, setCoffeeCount] = useState(1);

	const [isToastOpen, setIsToastOpen] = useState(false);

	function handleShowToast() {
		setIsToastOpen(true);

		const interval = setInterval(() => {
			setIsToastOpen(false);

			clearInterval(interval);
		}, 1000 * 2.5);
	}

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

	console.log(isToastOpen);

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
					<CartButton onClick={handleShowToast}>
						<ShoppingCartSimple size={22} weight="bold" />
						{isToastOpen && (
							<Toast>
								<Check size={16} weight="bold" />
								Adicionado ao carrinho
							</Toast>
						)}
					</CartButton>
				</div>
			</CardAction>
		</CardRoot>
	);
}
