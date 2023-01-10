import React, { useState } from "react";
import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";

import { PaymentButton, PaymentCardAction, PaymentCardRoot } from "./styles";

type PaymentType = "credit" | "debit" | "money" | null;

export function PaymentCard() {
	const [payment, setPayment] = useState<PaymentType>(null);

	function handleSelectPaymentType(type: PaymentType) {
		setPayment(type);
	}

	return (
		<PaymentCardRoot>
			<header>
				<CurrencyDollar size={24} />
				<div className="titleForm">
					<h4>Pagamento</h4>
					<span>
						O pagamento é feito na entrega. Escolha a forma que deseja pagar
					</span>
				</div>
			</header>
			<PaymentCardAction>
				<PaymentButton
					isActived={payment === "credit"}
					onClick={() => handleSelectPaymentType("credit")}
				>
					<CreditCard />
					<span>Cartão de Crédito</span>
				</PaymentButton>
				<PaymentButton
					isActived={payment === "debit"}
					onClick={() => handleSelectPaymentType("debit")}
				>
					<Bank />
					<span>Cartão de Débito</span>
				</PaymentButton>
				<PaymentButton
					isActived={payment === "money"}
					onClick={() => handleSelectPaymentType("money")}
				>
					<Money />
					<span>Dinheiro</span>
				</PaymentButton>
			</PaymentCardAction>
		</PaymentCardRoot>
	);
}
