import React from "react";
import { MapPin, ShoppingCart } from "phosphor-react";

import coffeeDeliveryLogo from "assets/svg/coffee-delivery-logo.svg";

import { CartButton, CartCount, HeaderRoot, Location } from "./styles";

export function Header() {
	return (
		<HeaderRoot>
			<img src={coffeeDeliveryLogo} />
			<div className="info">
				<Location>
					<MapPin size={24} weight="fill" />
					<span>Porto Alegre, RS</span>
				</Location>
				<CartButton>
					<CartCount>3</CartCount>
					<ShoppingCart size={24} />
				</CartButton>
			</div>
		</HeaderRoot>
	);
}
