import React from "react";

import { ConfirmPayment, Form, PaymentTypeCard } from "./components";

import { CheckoutRoot } from "./styles";

export function Checkout() {
	return (
		<CheckoutRoot>
			<div className="formSection">
				<h3>Complete seu pedido</h3>
				<Form />
				<PaymentTypeCard />
			</div>
			<div className="formSection">
				<h3>Cafés selecionados</h3>
				<ConfirmPayment />
			</div>
		</CheckoutRoot>
	);
}
