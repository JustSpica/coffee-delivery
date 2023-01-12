import React from "react";

import { usePaymentContext } from "contexts/PaymentContext";

import {
	ConfirmPaymentRoot,
	ConfirmButton,
	Divider,
	ItemsValue,
	TotalValue,
} from "./styles";

import { CoffeesCard } from "./components/CoffeesCard";

export function ConfirmPayment() {
	const { coffeesCart } = usePaymentContext();

	const totalItemsAmount = coffeesCart.reduce((accumulator, coffe) => {
		return accumulator + coffe.amount;
	}, 0);

	const deliveryAmount = 3.5;

	const totalAmount = totalItemsAmount + deliveryAmount;

	return (
		<ConfirmPaymentRoot>
			{coffeesCart.map(coffee => (
				<>
					<CoffeesCard
						key={coffee.title}
						amount={coffee.amount}
						count={coffee.count}
						image={coffee.image}
						title={coffee.title}
					/>
					<Divider />
				</>
			))}
			<div className="values">
				<ItemsValue>
					<span>Total de itens</span>
					<span>
						{new Intl.NumberFormat("pt-BR", {
							style: "currency",
							currency: "BRL",
						}).format(totalItemsAmount)}
					</span>
				</ItemsValue>
				<ItemsValue>
					<span>Entrega</span>
					<span>
						{new Intl.NumberFormat("pt-BR", {
							style: "currency",
							currency: "BRL",
						}).format(deliveryAmount)}
					</span>
				</ItemsValue>
				<TotalValue>
					<span>Total</span>
					<span>
						{new Intl.NumberFormat("pt-BR", {
							style: "currency",
							currency: "BRL",
						}).format(totalAmount)}
					</span>
				</TotalValue>
			</div>
			<ConfirmButton>Confirmar Pedido</ConfirmButton>
		</ConfirmPaymentRoot>
	);
}
