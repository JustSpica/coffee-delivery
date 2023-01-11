import React from "react";

import {
	ConfirmPaymentRoot,
	ConfirmButton,
	Divider,
	ItemsValue,
	TotalValue,
} from "./styles";

import { CoffeesCard } from "../CoffeesCard";

export function ConfirmPayment() {
	return (
		<ConfirmPaymentRoot>
			<CoffeesCard />
			<Divider />
			<CoffeesCard />
			<Divider />
			<div className="values">
				<ItemsValue>
					<span>Total de itens</span>
					<span>
						{new Intl.NumberFormat("pt-BR", {
							style: "currency",
							currency: "BRL",
						}).format(29.7)}
					</span>
				</ItemsValue>
				<ItemsValue>
					<span>Entrega</span>
					<span>
						{new Intl.NumberFormat("pt-BR", {
							style: "currency",
							currency: "BRL",
						}).format(3.5)}
					</span>
				</ItemsValue>
				<TotalValue>
					<span>Total</span>
					<span>
						{new Intl.NumberFormat("pt-BR", {
							style: "currency",
							currency: "BRL",
						}).format(29.7)}
					</span>
				</TotalValue>
			</div>
			<ConfirmButton>Confirmar Pedido</ConfirmButton>
		</ConfirmPaymentRoot>
	);
}
