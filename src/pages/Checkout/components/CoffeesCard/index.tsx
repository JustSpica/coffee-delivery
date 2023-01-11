import React from "react";
import { Trash } from "phosphor-react";

import { ActionCount } from "components";

import { CoffeesCardAction, CoffeesCardRoot } from "./styles";

export function CoffeesCard() {
	return (
		<CoffeesCardRoot>
			<div className="info">
				<img src="https://i.imgur.com/rFB0aBy.png" />
				<CoffeesCardAction>
					<span>Expresso Tradicional</span>
					<div className="action">
						<ActionCount>1</ActionCount>
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
				}).format(9.9)}
			</strong>
		</CoffeesCardRoot>
	);
}
