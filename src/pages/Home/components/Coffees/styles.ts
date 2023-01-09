import styled, { css } from "styled-components";

export const CoffeesRoot = styled.section`
	${({ theme }) => css`
		width: 100%;

		> h2 {
			font-family: "Baloo 2";
			font-size: ${theme.fontSizes["3xl"]};
			font-weight: ${theme.fontWeights.extraBold};
		}
	`}
`;
