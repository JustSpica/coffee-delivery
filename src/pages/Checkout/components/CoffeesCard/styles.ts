import styled, { css } from "styled-components";

export const CoffeesCardRoot = styled.section`
	${({ theme }) => css`
		width: 100%;
		padding: ${theme.space[2]} ${theme.space[1]};

		display: flex;
		justify-content: space-between;
	`}
`;

export const CoffeesCardImage = styled.div`
	display: flex;
	align-items: center;

	> img {
		width: 64px;
	}
`;

export const CoffeesCardInfo = styled.div`
	${({ theme }) => css`
		margin-left: ${theme.space[5]};

		display: flex;
		flex-direction: column;
		gap: ${theme.space[2]};
	`}
`;

export const CoffeesCardAction = styled.div`
	${({ theme }) => css`
		display: flex;
		gap: ${theme.space[2]};

		.removeButton {
			padding: ${theme.space[2]};

			display: flex;
			align-items: center;
			gap: ${theme.space[1]};

			border: 0;
			border-radius: ${theme.rounded.md};

			background-color: ${theme.colors["zinc-400"]};

			transition: all 150ms;
			cursor: pointer;

			svg {
				color: ${theme.colors["purple-600"]};
			}

			&:hover {
				background-color: ${theme.colors["zinc-500"]};
			}
		}
	`}
`;
