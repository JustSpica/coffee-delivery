import React from "react";
import { Trash } from "phosphor-react";

import { ActionCount } from "components";

import { CoffeesCardAction, CoffeesCardRoot } from "./styles";

interface CoffeesCardProps {
	amount: number;
	count: number;
	image: string;
	title: string;
}

export function CoffeesCard({ amount, count, image, title }: CoffeesCardProps) {
	return (
		<CoffeesCardRoot>
			<div className="info">
				<img src={image} />
				<CoffeesCardAction>
					<span>{title}</span>
					<div className="action">
						<ActionCount>{count}</ActionCount>
						<button className="removeButton">
							<Trash />
							Remover
						</button>
					</div>
				</CoffeesCardAction>
			</div>
			<strong>
				{new Intl.NumberFormat("pt-BR", {
					style: "currency",
					currency: "BRL",
				}).format(amount)}
			</strong>
		</CoffeesCardRoot>
	);
}
