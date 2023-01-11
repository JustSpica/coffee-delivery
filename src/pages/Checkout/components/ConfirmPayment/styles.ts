import styled, { css } from "styled-components";

export const ConfirmPaymentRoot = styled.section`
	${({ theme }) => css`
		width: 100%;
		padding: ${theme.space[10]};

		display: flex;
		flex-direction: column;
		gap: ${theme.space[6]};

		border-radius: 6px 36px 6px 36px;

		background-color: ${theme.colors["zinc-200"]};

		.values {
			display: flex;
			flex-direction: column;
			gap: ${theme.space[3]};
		}
	`}
`;

const BaseItemsValue = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const ItemsValue = styled(BaseItemsValue)`
	${({ theme }) => css`
		font-size: ${theme.fontSizes.sm};

		color: ${theme.colors["zinc-700"]};
	`}
`;

export const TotalValue = styled(BaseItemsValue)`
	${({ theme }) => css`
		font-size: ${theme.fontSizes.xl};
		font-weight: ${theme.fontWeights.bold};

		color: ${theme.colors["zinc-800"]};
	`}
`;

export const Divider = styled.span`
	${({ theme }) => css`
		width: 100%;
		height: 1px;

		display: block;

		background-color: ${theme.colors["zinc-400"]};
	`}
`;

export const ConfirmButton = styled.button`
	${({ theme }) => css`
		width: 100%;
		padding: ${theme.space[3]} ${theme.space[2]};

		font-size: ${theme.fontSizes.sm};
		font-weight: ${theme.fontWeights.bold};
		line-height: 1.6;
		text-transform: uppercase;

		border: 0;
		border-radius: ${theme.rounded.md};

		background-color: ${theme.colors["orange-300"]};
		color: ${theme.colors.white};

		cursor: pointer;
		transition: all 150ms;

		&:hover {
			background-color: ${theme.colors["orange-400"]};
		}
	`}
`;
