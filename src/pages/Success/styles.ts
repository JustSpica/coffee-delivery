import styled, { css } from "styled-components";

export const SuccessRoot = styled.section`
	${({ theme }) => css`
		width: 100%;
		padding: ${theme.space[20]} ${theme.space[40]};

		display: grid;
		grid-template-columns: repeat(2, 1fr);
		align-items: flex-end;
		gap: ${theme.space[32]};

		.infoContainer {
			display: flex;
			flex-direction: column;
			gap: ${theme.space[10]};

			header {
				display: flex;
				flex-direction: column;
				gap: ${theme.space[1]};

				h1 {
					font-family: "Baloo 2";
					font-size: ${theme.fontSizes["3xl"]};
					font-weight: ${theme.fontWeights.extraBold};
					line-height: 1.3;

					color: ${theme.colors["orange-400"]};
				}

				span {
					font-size: ${theme.fontSizes.xl};

					color: ${theme.colors["zinc-800"]};
				}
			}
		}
	`}
`;

export const CardInfo = styled.div`
	${({ theme }) => css`
		width: 100%;
		padding: ${theme.space[10]};
		position: relative;

		display: flex;
		flex-direction: column;
		gap: ${theme.space[8]};

		border-radius: 6px 36px 6px 36px;
		background: linear-gradient(135deg, #dbac2c, #8047f8);

		z-index: 1;

		> ${Info}:nth-child(2) {
			.icon {
				background-color: ${theme.colors["orange-300"]};
			}
		}

		> ${Info}:nth-child(3) {
			.icon {
				background-color: ${theme.colors["orange-400"]};
			}
		}

		&::before {
			content: "";
			height: calc(100% - 2px * 2);
			width: calc(100% - 2px * 2);
			top: 2px;
			left: 2px;
			position: absolute;

			border-radius: 3px 33px 3px 33px;

			background-color: ${theme.colors["zinc-100"]};

			z-index: -1;
		}
	`}
`;

export const Info = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		gap: ${theme.space[3]};

		.icon {
			padding: ${theme.space[2]};

			display: flex;

			border-radius: ${theme.rounded.full};

			background-color: ${theme.colors["purple-900"]};
			color: ${theme.colors.white};
		}

		.textInfo {
			display: flex;
			flex-direction: column;

			color: ${theme.colors["zinc-700"]};
		}
	`}
`;
