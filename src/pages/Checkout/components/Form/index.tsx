import React from "react";
import { MapPinLine } from "phosphor-react";

import { FormContainer, FormRoot, TextField } from "./styles";

export function Form() {
	return (
		<FormRoot>
			<header>
				<MapPinLine size={24} />
				<div className="titleForm">
					<h4>Endereço de Entrega</h4>
					<span>Informe o endereço onde deseja Receber seu pedido</span>
				</div>
			</header>
			<FormContainer>
				<div className="gridWithOneField">
					<TextField placeholder="CEP" />
				</div>
				<TextField placeholder="Rua" />
				<div className="gridWithTwoField">
					<TextField placeholder="Número" />
					<TextField placeholder="Complemento" />
				</div>
				<div className="gridWithThreeField">
					<TextField placeholder="Bairro" />
					<TextField placeholder="Cidade" />
					<TextField placeholder="UF" />
				</div>
			</FormContainer>
		</FormRoot>
	);
}
