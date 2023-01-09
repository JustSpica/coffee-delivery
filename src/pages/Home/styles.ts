import styled, { css, DefaultTheme } from "styled-components";

export const HomeRoot = styled.main`
	${({ theme }) => css`
		width: 100%;
		padding: 0 ${theme.space[40]};
	`}
`;

export const Welcome = styled.section`
	${({ theme }) => css`
		width: 100%;
		min-width: 1140px;

		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: ${theme.space[14]};
	`}
`;

export const Info = styled.div`
	${({ theme }) => css`
		h1 {
			font-family: "Baloo 2";
			font-size: ${theme.fontSizes["5xl"]};
			font-weight: ${theme.fontWeights.extraBold};
			line-height: 1.3;

			color: ${theme.colors["zinc-900"]};
		}

		p {
			margin-top: ${theme.space[4]};

			font-family: ${theme.fonts.default};
			font-size: ${theme.fontSizes.xl};

			color: ${theme.colors["zinc-800"]};
		}

		.itemsList {
			margin-top: ${theme.space[16]};

			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: ${theme.space[5]};
		}
	`}
`;

const itemModifiers = {
	orange: (theme: DefaultTheme) => css`
		background-color: ${theme.colors["orange-400"]};
	`,
	yellow: (theme: DefaultTheme) => css`
		background-color: ${theme.colors["orange-300"]};
	`,
	zinc: (theme: DefaultTheme) => css`
		background-color: ${theme.colors["zinc-700"]};
	`,
	purple: (theme: DefaultTheme) => css`
		background-color: ${theme.colors["purple-600"]};
	`,
};

interface ItemProps {
	color: keyof typeof itemModifiers;
}

export const Item = styled.div<ItemProps>`
	${({ theme, color }) => css`
		display: flex;
		align-items: center;
		gap: ${theme.space[3]};

		span {
			color: ${theme.colors["zinc-700"]};
		}

		.icon {
			padding: 8px;

			display: flex;

			border-radius: ${theme.rounded.full};

			color: ${theme.colors.white};

			${!!color && itemModifiers[color](theme)}
		}
	`}
`;
