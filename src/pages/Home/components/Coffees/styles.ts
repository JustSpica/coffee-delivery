import styled, { css } from "styled-components";

export const CoffeesRoot = styled.section`
	${({ theme }) => css`
		width: 100%;
		padding: ${theme.space[8]} 0;

		> h2 {
			font-family: "Baloo 2";
			font-size: ${theme.fontSizes["3xl"]};
			font-weight: ${theme.fontWeights.extraBold};
		}

		> section {
			margin-top: ${theme.space[14]};

			display: grid;
			grid-template-columns: repeat(4, 1fr);
			gap: ${theme.space[16]};
		}
	`}
`;
