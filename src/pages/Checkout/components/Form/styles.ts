import styled, { css } from "styled-components";

export const FormRoot = styled.section`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: ${theme.space[8]};
	`}
`;

export const FormSection = styled.div`
	${({ theme }) => css`
		width: 100%;
		padding: ${theme.space[10]};

		border-radius: ${theme.rounded.md};

		background-color: ${theme.colors["zinc-200"]};

		header {
			display: flex;
			gap: ${theme.space[2]};

			color: ${theme.colors["orange-400"]};
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

export const FieldsSection = styled.div`
	${({ theme }) => css`
		width: 100%;
		margin-top: ${theme.space[8]};

		display: flex;
		flex-direction: column;
		gap: ${theme.space[4]};

		.gridWithOneField {
			display: grid;
			grid-template-columns: 270px;
		}

		.gridWithTwoField {
			display: grid;
			grid-template-columns: 270px 1fr;
			gap: ${theme.space[3]};
		}

		.gridWithThreeField {
			display: grid;
			grid-template-columns: 270px 1fr 0.175fr;
			gap: ${theme.space[3]};
		}
	`}
`;

export const TextField = styled.input`
	${({ theme }) => css`
		width: 100%;
		padding: ${theme.space[3]};
		flex: 1;

		border: 1px solid ${theme.colors["zinc-400"]};
		border-radius: ${theme.rounded.sm};

		background-color: ${theme.colors["zinc-300"]};
		color: ${theme.colors["zinc-700"]};

		outline: 0;

		transition: all 150ms;

		&:focus {
			border: 1px solid ${theme.colors["orange-400"]};
		}

		&::placeholder {
			color: ${theme.colors["zinc-600"]};
		}
	`}
`;

export const PaymentSection = styled.section`
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

export const PaymentAction = styled.div`
	${({ theme }) => css`
		width: 100%;
		margin-top: ${theme.space[8]};

		display: flex;
		gap: ${theme.space[3]};

		input {
			display: none;
		}

		input:checked + label {
			border-color: ${theme.colors["purple-600"]};

			background-color: ${theme.colors["purple-200"]};
		}

		input:not(:checked) + label:hover {
			background-color: ${theme.colors["zinc-500"]};

			span {
				color: ${theme.colors["zinc-800"]};
			}
		}

		label {
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

			transition: all 150ms;

			cursor: pointer;

			span {
				text-transform: uppercase;

				color: ${theme.colors["zinc-700"]};

				transition: all 150ms;
			}
		}
	`}
`;
