import styled, { css } from "styled-components";

export const FormRoot = styled.section`
	${({ theme }) => css`
		width: 100%;
		margin-top: ${theme.space[4]};
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

export const FormContainer = styled.form`
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

interface TextFieldProps {
	optional?: boolean;
}

export const TextField = styled.input<TextFieldProps>`
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
