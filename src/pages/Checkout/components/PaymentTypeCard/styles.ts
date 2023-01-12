import styled, { css, DefaultTheme } from "styled-components";

export const PaymentCardRoot = styled.section`
	${({ theme }) => css`
		width: 100%;
		padding: ${theme.space[10]};

		border-radius: ${theme.rounded.md};

		background-color: ${theme.colors["zinc-200"]};

		header {
			display: flex;
			gap: ${theme.space[2]};

			color: ${theme.colors["purple-600"]};
		}

		.titleForm {
			display: flex;
			flex-direction: column;

			h4 {
				font-size: ${theme.fontSizes.md};
				font-weight: ${theme.fontWeights.regular};

				color: ${theme.colors["zinc-800"]};
			}

			span {
				font-size: ${theme.fontSizes.sm};
				font-weight: ${theme.fontWeights.regular};

				color: ${theme.colors["zinc-700"]};
			}
		}
	`}
`;

export const PaymentCardAction = styled.div`
	${({ theme }) => css`
		width: 100%;
		margin-top: ${theme.space[8]};

		display: flex;
		gap: ${theme.space[3]};
	`}
`;

interface PaymentButtonProps {
	isActived: boolean;
}

const paymentButtonModifier = {
	actived: (theme: DefaultTheme) => css`
		border-color: ${theme.colors["purple-600"]};

		background-color: ${theme.colors["purple-200"]};
	`,
};

export const PaymentButton = styled.button<PaymentButtonProps>`
	${({ isActived, theme }) => css`
		padding: ${theme.space[4]};
		flex: 1;

		display: flex;
		align-items: center;
		justify-content: center;
		gap: ${theme.space[3]};

		border: 1px solid ${theme.colors["zinc-500"]};
		border-radius: ${theme.rounded.md};

		background-color: ${theme.colors["zinc-400"]};
		color: ${theme.colors["purple-600"]};

		cursor: pointer;

		transition: all 150ms;

		${!isActived &&
		css`
			&:hover {
				background-color: ${theme.colors["zinc-500"]};

				span {
					color: ${theme.colors["zinc-800"]};
				}
			}
		`}

		${isActived && paymentButtonModifier.actived(theme)}

		span {
			text-transform: uppercase;

			color: ${theme.colors["zinc-700"]};

			transition: all 150ms;
		}
	`}
`;
