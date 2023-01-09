import React from "react";
import { Coffee, ShoppingCart, Package, Timer } from "phosphor-react";

import coffeeImage from "assets/img/coffee-home-image.png";

import { Coffees } from "./components";

import { HomeRoot, Info, Item, Welcome } from "./styles";

export function Home() {
	return (
		<HomeRoot>
			<Welcome>
				<Info>
					<h1>
						Encontree o café perfeito <br /> para qualquer hora do dia
					</h1>
					<p>
						Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
						hora
					</p>
					<div className="itemsList">
						<Item color="orange">
							<div className="icon">
								<ShoppingCart size={16} />
							</div>
							<span>Compra simples e segura</span>
						</Item>
						<Item color="yellow">
							<div className="icon">
								<Package size={16} />
							</div>
							<span>Embalagem mantém o café intacto</span>
						</Item>
						<Item color="zinc">
							<div className="icon">
								<Timer size={16} />
							</div>
							<span>Entrega rápida e rastreada</span>
						</Item>
						<Item color="purple">
							<div className="icon">
								<Coffee size={16} />
							</div>
							<span>O café chega fresquinho até você</span>
						</Item>
					</div>
				</Info>
				<img src={coffeeImage} />
			</Welcome>
			<Coffees />
		</HomeRoot>
	);
}
