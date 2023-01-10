import React from "react";
import { Minus, Plus } from "phosphor-react";

import { ActionCountRoot } from "./styles";

export interface ActionCountProps {
	children: React.ReactNode;
	onMinus: () => void;
	onPlus: () => void;
}

export function ActionCount({ children, onMinus, onPlus }: ActionCountProps) {
	return (
		<ActionCountRoot>
			<button onClick={onMinus}>
				<Minus size={14} weight="fill" />
			</button>
			<span>{children}</span>
			<button onClick={onPlus}>
				<Plus size={14} weight="bold" />
			</button>
		</ActionCountRoot>
	);
}
