import React from "react";

import { Form } from "./components/Form";

import { CheckoutRoot } from "./styles";

export function Checkout() {
	return (
		<CheckoutRoot>
			<div>
				<h3>Complete seu pedido</h3>
				<Form />
			</div>
			<div>
				<h3>Cafés selecionados</h3>
			</div>
		</CheckoutRoot>
	);
}
