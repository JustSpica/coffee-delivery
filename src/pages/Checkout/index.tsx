import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";

import { usePaymentContext } from "contexts/PaymentContext";
import { UserData } from "contexts/PaymentContext/context-type";

import { ConfirmPayment, Form } from "./components";

import { CheckoutRoot } from "./styles";

export function Checkout() {
	const userDataForm = useForm<UserData>({
		defaultValues: {
			cep: "",
			city: "",
			complement: "",
			district: "",
			houseNumber: "",
			state: "",
			street: "",
		},
	});
	const navigate = useNavigate();
	const { handleSaveUserData } = usePaymentContext();

	const { formState, handleSubmit } = userDataForm;
	const { isValid } = formState;

	function handleConfirmPayment(data: UserData) {
		handleSaveUserData(data);
		navigate("/success");
	}

	return (
		<CheckoutRoot>
			<form onSubmit={handleSubmit(handleConfirmPayment)}>
				<div className="content">
					<h3>Complete seu pedido</h3>
					<FormProvider {...userDataForm}>
						<Form />
					</FormProvider>
				</div>
				<div className="content">
					<h3>Cafés selecionados</h3>
					<ConfirmPayment isDisabled={!isValid} />
				</div>
			</form>
		</CheckoutRoot>
	);
}
