import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
	* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

	${({ theme }) => css`
		body,
		input,
		textarea,
		button {
			font-family: ${theme.fonts.default};
			font-weight: ${theme.fontWeights.regular};
			font-size: ${theme.fontSizes.md};
		}

		body {
			background-color: ${theme.colors["zinc-100"]};
			color: ${theme.colors["zinc-700"]};
		}
	`}
`;
