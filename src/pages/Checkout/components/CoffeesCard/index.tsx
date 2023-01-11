import React from "react";
import { Trash } from "phosphor-react";

import { ActionCount } from "components";

import {
	CoffeesCardAction,
	CoffeesCardImage,
	CoffeesCardInfo,
	CoffeesCardRoot,
} from "./styles";

export interface CoffeCardRootProps {
	children: React.ReactNode;
}

export function Root({ children }: CoffeCardRootProps) {
	return <CoffeesCardRoot>{children}</CoffeesCardRoot>;
}

export interface CoffeCardImageProps {
	children: React.ReactNode;
	image: string;
}

export function ImageContainer({ children, image }: CoffeCardImageProps) {
	return (
		<CoffeesCardImage>
			<img src={image} />
			{children}
		</CoffeesCardImage>
	);
}

export interface CoffeCardInfoProps {
	children: React.ReactNode;
	title: string;
}

export function Info({ children, title }: CoffeCardInfoProps) {
	return (
		<CoffeesCardInfo>
			<span>{title}</span>
			{children}
		</CoffeesCardInfo>
	);
}

export interface CoffeCardActionProps {
	children: React.ReactNode;
}

export function Action({ children }: CoffeCardActionProps) {
	return (
		<CoffeesCardAction>
			<ActionCount>{children}</ActionCount>
			<button className="removeButton">
				<Trash />
				Remover
			</button>
		</CoffeesCardAction>
	);
}

export interface CoffeCardAmountProps {
	amount: number;
}

export function Amount({ amount }: CoffeCardAmountProps) {
	return (
		<strong>
			{new Intl.NumberFormat("pt-BR", {
				style: "currency",
				currency: "BRL",
			}).format(amount)}
		</strong>
	);
}
