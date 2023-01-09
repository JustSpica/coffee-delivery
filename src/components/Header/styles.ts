import styled, { css } from "styled-components";

export const HeaderRoot = styled.header`
	${({ theme }) => css`
		width: 100%;
		padding: ${theme.space[8]} ${theme.space[40]};

		display: flex;
		align-items: center;
		justify-content: space-between;

		.info {
			display: flex;
			align-items: center;
			gap: ${theme.space[3]};
		}
	`}
`;

export const Location = styled.div`
	${({ theme }) => css`
		padding: ${theme.space[2]};

		display: flex;
		align-items: center;
		gap: ${theme.space[1]};

		border-radius: ${theme.rounded.lg};

		background-color: ${theme.colors["purple-200"]};
		color: ${theme.colors["purple-600"]};

		span {
			font-size: ${theme.fontSizes.sm};

			color: ${theme.colors["purple-900"]};
		}
	`}
`;

interface CardButtonProps {
	count?: number;
}

export const CartButton = styled.button<CardButtonProps>`
	${({ theme, count }) => css`
		padding: ${theme.space[2]};
		position: relative;

		display: flex;

		border: 0;
		border-radius: ${theme.rounded.lg};

		background-color: ${theme.colors["orange-100"]};
		color: ${theme.colors["orange-400"]};
	`}
`;

export const CartCount = styled.span`
	${({ theme }) => css`
		position: absolute;
		width: 20px;
		height: 20px;
		top: -8px;
		right: -8px;

		display: flex;
		align-items: center;
		justify-content: center;

		font-size: ${theme.fontSizes.xs};
		font-weight: ${theme.fontWeights.bold};

		border-radius: ${theme.rounded.full};

		background-color: ${theme.colors["orange-400"]};
		color: ${theme.colors.white};
	`}
`;
