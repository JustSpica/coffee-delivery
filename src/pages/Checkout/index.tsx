import React from "react";

import { Form, PaymentCard } from "./components";

import { CheckoutRoot } from "./styles";

export function Checkout() {
	return (
		<CheckoutRoot>
			<div className="formSection">
				<h3>Complete seu pedido</h3>
				<Form />
				<PaymentCard />
			</div>
			<div>
				<h3>Cafés selecionados</h3>
			</div>
		</CheckoutRoot>
	);
}
