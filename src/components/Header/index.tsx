import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

import coffeeDeliveryLogo from "assets/svg/coffee-delivery-logo.svg";

import { CartButton, CartCount, HeaderRoot, Location } from "./styles";

export function Header() {
	return (
		<HeaderRoot>
			<Link to="/">
				<img src={coffeeDeliveryLogo} />
			</Link>
			<div className="info">
				<Location>
					<MapPin size={24} weight="fill" />
					<span>Porto Alegre, RS</span>
				</Location>
				<CartButton to="/checkout">
					<CartCount>3</CartCount>
					<ShoppingCart size={24} weight="fill" />
				</CartButton>
			</div>
		</HeaderRoot>
	);
}
