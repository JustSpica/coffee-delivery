import React from "react";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import successIllustration from "assets/svg/success-illustration.svg";

import { CardInfo, Info, SuccessRoot } from "./styles";
import { usePaymentContext } from "contexts/PaymentContext";

export function Success() {
	const { userData } = usePaymentContext();

	return (
		<SuccessRoot>
			<div className="infoContainer">
				<header>
					<h1>Uhu! Pedido confirmado</h1>
					<span>Agora é só aguardar que logo o café chegará até você</span>
				</header>

				<CardInfo>
					<Info>
						<div className="icon">
							<MapPin size={20} weight="fill" />
						</div>
						<div className="textInfo">
							<span>
								Entrega em{" "}
								<strong>
									{userData.street}, {userData.houseNumber}
								</strong>
							</span>
							<span>
								{userData.district} - {userData.city}, {userData.state}
							</span>
						</div>
					</Info>
					<Info>
						<div className="icon">
							<Timer size={20} weight="fill" />
						</div>
						<div className="textInfo">
							<span>Previsão de entrega</span>
							<strong>20 min - 30 min</strong>
						</div>
					</Info>
					<Info>
						<div className="icon">
							<CurrencyDollar size={20} weight="fill" />
						</div>
						<div className="textInfo">
							<span>Pagamento na entrega</span>
							<strong>
								{userData.paymentType === "credit"
									? "Cartão de Crédito"
									: userData.paymentType === "debit"
									? "Cartão de Débito"
									: "Dinheiro"}
							</strong>
						</div>
					</Info>
				</CardInfo>
			</div>
			<img src={successIllustration} />
		</SuccessRoot>
	);
}
