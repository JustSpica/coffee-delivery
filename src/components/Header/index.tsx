import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

import coffeeDeliveryLogo from "assets/svg/coffee-delivery-logo.svg";

import { useCoffeContext } from "contexts/CoffeeContext";

import { CartButton, CartCount, HeaderRoot, Location } from "./styles";

export function Header() {
	const { coffees } = useCoffeContext();

	const hasCoffeAddedInCart = coffees.length !== 0;

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
					{hasCoffeAddedInCart && <CartCount>{coffees.length}</CartCount>}

					<ShoppingCart size={24} weight="fill" />
				</CartButton>
			</div>
		</HeaderRoot>
	);
}
