import React from "react";
import { useFormContext } from "react-hook-form";
import {
	Bank,
	CreditCard,
	CurrencyDollar,
	MapPinLine,
	Money,
} from "phosphor-react";

import {
	FieldsSection,
	FormSection,
	FormRoot,
	PaymentAction,
	PaymentSection,
	TextField,
} from "./styles";

export function Form() {
	const { register } = useFormContext();

	return (
		<FormRoot>
			<FormSection>
				<header>
					<MapPinLine size={24} />
					<div className="titleForm">
						<h4>Endereço de Entrega</h4>
						<span>Informe o endereço onde deseja Receber seu pedido</span>
					</div>
				</header>
				<FieldsSection>
					<div className="gridWithOneField">
						<TextField
							placeholder="CEP"
							{...register("cep", { required: true })}
						/>
					</div>
					<TextField
						placeholder="Rua"
						{...register("street", { required: true })}
					/>
					<div className="gridWithTwoField">
						<TextField
							placeholder="Número"
							{...register("houseNumber", { required: true })}
						/>
						<TextField placeholder="Complemento" {...register("complement")} />
					</div>
					<div className="gridWithThreeField">
						<TextField
							placeholder="Bairro"
							{...register("district", { required: true })}
						/>
						<TextField
							placeholder="Cidade"
							{...register("city", { required: true })}
						/>
						<TextField
							placeholder="UF"
							{...register("state", { required: true })}
						/>
					</div>
				</FieldsSection>
			</FormSection>
			<PaymentSection>
				<header>
					<CurrencyDollar size={24} />
					<div className="titleForm">
						<h4>Pagamento</h4>
						<span>
							O pagamento é feito na entrega. Escolha a forma que deseja pagar
						</span>
					</div>
				</header>
				<PaymentAction>
					<input
						id="credit"
						type="radio"
						value="credit"
						{...register("paymentType", { required: true })}
					/>
					<label htmlFor="credit">
						<CreditCard size={20} />
						<span>Cartão de Crédito</span>
					</label>
					<input
						id="debit"
						type="radio"
						value="debit"
						{...register("paymentType")}
					/>
					<label htmlFor="debit">
						<Bank size={20} />
						<span>Cartão de Débito</span>
					</label>
					<input
						id="money"
						type="radio"
						value="money"
						{...register("paymentType")}
					/>
					<label htmlFor="money">
						<Money size={20} />
						<span>Dinheiro</span>
					</label>
				</PaymentAction>
			</PaymentSection>
		</FormRoot>
	);
}
