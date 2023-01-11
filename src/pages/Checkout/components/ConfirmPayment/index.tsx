import React from "react";

import { usePaymentContext } from "contexts/PaymentContext";

import {
	ConfirmPaymentRoot,
	ConfirmButton,
	Divider,
	ItemsValue,
	TotalValue,
} from "./styles";

import * as CoffeesCard from "../CoffeesCard";

export function ConfirmPayment() {
	const { coffees } = usePaymentContext();

	const totalItemsAmount = coffees.reduce((accumulator, coffe) => {
		return accumulator + coffe.amount;
	}, 0);

	const deliveryAmount = 3.5;

	const totalAmount = totalItemsAmount + deliveryAmount;

	return (
		<ConfirmPaymentRoot>
			{coffees.map(coffe => (
				<>
					<CoffeesCard.Root key={coffe.title}>
						<CoffeesCard.ImageContainer image={coffe.image}>
							<CoffeesCard.Info title={coffe.title}>
								<CoffeesCard.Action>{coffe.count}</CoffeesCard.Action>
							</CoffeesCard.Info>
						</CoffeesCard.ImageContainer>
						<CoffeesCard.Amount amount={coffe.amount} />
					</CoffeesCard.Root>
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
