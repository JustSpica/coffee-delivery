import styled, { css } from "styled-components";

export const CheckoutRoot = styled.section`
	${({ theme }) => css`
		width: 100%;
		padding: 0 ${theme.space[40]};

		display: grid;
		grid-template-columns: 1fr 0.7fr;
		gap: ${theme.space[8]};

		h3 {
			font-size: ${theme.fontSizes.lg};
		}
	`}
`;
