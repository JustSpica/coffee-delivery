import styled, { css } from "styled-components";

export const DefaultLayoutRoot = styled.div`
	${({ theme }) => css`
		width: 100%;

		background-color: ${theme.colors["zinc-100"]};
	`}
`;
