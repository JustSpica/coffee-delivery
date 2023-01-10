import styled, { css } from "styled-components";

export const ActionCountRoot = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;

		border-radius: ${theme.rounded.md};

		background-color: ${theme.colors["zinc-400"]};

		button {
			height: 100%;
			padding: 0 ${theme.space[2]};

			border: 0;

			background-color: transparent;
			color: ${theme.colors["purple-600"]};

			cursor: pointer;

			transition: all 150ms;

			&:hover {
				color: ${theme.colors["purple-900"]};
			}
		}
	`}
`;
