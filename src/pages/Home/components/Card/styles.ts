import styled, { css, keyframes } from "styled-components";

const toastAnimation = keyframes`
	0% {
		bottom: -150%;
		right: -200%;
		opacity: 0;
	}

	25% {
		bottom: -100%;
		right: -200%;
		opacity: 1;
	}

	75% {
		bottom: -100%;
		right: -200%;
		opacity: 1;
	}

	100% {
		bottom: -150%;
		right: -200%;
		opacity: 0;
	}
`;

export const CardRoot = styled.div`
	${({ theme }) => css`
		width: 100%;
		padding: ${theme.space[5]};

		display: flex;
		flex-direction: column;
		align-items: center;

		border-radius: 6px 36px 6px 36px;

		background-color: ${theme.colors["zinc-200"]};

		img {
			transform: translateY(-50%);
		}

		.titleCard {
			font-family: "Baloo 2";
			font-size: ${theme.fontSizes.xl};
			font-weight: ${theme.fontWeights.bold};
			line-height: 1.3;

			color: ${theme.colors["zinc-800"]};
		}

		.descriptionCard {
			margin-top: ${theme.space[2]};

			font-size: ${theme.fontSizes.sm};
			line-height: 1.3;
			text-align: center;

			color: ${theme.colors["zinc-600"]};
		}
	`}
`;

export const CardAction = styled.div`
	${({ theme }) => css`
		width: 100%;
		margin-top: ${theme.space[8]};

		display: flex;
		align-items: center;
		justify-content: space-between;

		> strong {
			font-family: "Baloo 2";
			font-size: ${theme.fontSizes["2xl"]};
			font-weight: ${theme.fontWeights.extraBold};
			line-height: 1.3;

			color: ${theme.colors["zinc-800"]};
		}

		.actionButtons {
			display: flex;
			gap: ${theme.space[2]};
		}
	`}
`;

export const CartButton = styled.button`
	${({ theme }) => css`
		padding: ${theme.space[2]};
		position: relative;

		display: flex;

		border: 0;
		border-radius: ${theme.rounded.md};

		background-color: ${theme.colors["purple-900"]};
		color: ${theme.colors.white};

		cursor: pointer;

		transition: background 150ms;

		&:hover {
			background-color: ${theme.colors["purple-600"]};
		}
	`}
`;

export const Toast = styled.div`
	${({ theme }) => css`
		padding: ${theme.space[2]};
		position: absolute;
		bottom: -150%;
		right: -200%;

		display: flex;
		align-items: center;
		gap: ${theme.space[2]};

		font-size: ${theme.fontSizes.sm};
		white-space: nowrap;

		border-radius: ${theme.rounded.md};

		background-color: ${theme.colors["purple-900"]};

		animation: ${toastAnimation} 2.5s ease;
		pointer-events: none;
	`}
`;
