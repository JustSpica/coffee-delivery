import React, { useState } from "react";
import { Check, ShoppingCartSimple } from "phosphor-react";

import { useCoffeContext } from "contexts/CoffeeContext";

import { ActionCount } from "components";

import { CardAction, CardRoot, CartButton, Toast } from "./styles";

export interface CardCoffeesProps {
	amount: number;
	description: string;
	image: string;
	title: string;
}

export function Card({ amount, description, image, title }: CardCoffeesProps) {
	const [coffeeAmount, setCoffeeAmount] = useState(amount);
	const [coffeeCount, setCoffeeCount] = useState(1);
	const [isToastOpen, setIsToastOpen] = useState(false);

	const { handleAddCoffeeToCart } = useCoffeContext();

	function handleShowToast() {
		setIsToastOpen(true);

		const interval = setInterval(() => {
			setIsToastOpen(false);

			clearInterval(interval);
		}, 1000 * 2.5);
	}

	function handleClickButtonCart() {
		handleShowToast();
		handleAddCoffeeToCart({
			amount: Number(coffeeAmount.toFixed(2)),
			count: coffeeCount,
			image,
			title,
		});
	}

	function handleIncrementCoffeeCount() {
		setCoffeeAmount(amount * (coffeeCount + 1));
		setCoffeeCount(prevState => prevState + 1);
	}

	function handleReductionCoffeeCount() {
		if (coffeeCount === 1) return;

		setCoffeeAmount(amount * (coffeeCount - 1));
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
					}).format(coffeeAmount)}
				</strong>
				<div className="actionButtons">
					<ActionCount
						onMinus={handleReductionCoffeeCount}
						onPlus={handleIncrementCoffeeCount}
					>
						{coffeeCount}
					</ActionCount>
					<CartButton
						title="Adicionar ao carrinho"
						onClick={handleClickButtonCart}
					>
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
