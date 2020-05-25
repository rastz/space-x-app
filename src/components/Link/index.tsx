import styled, { css } from "styled-components";
import { ReactNode } from "react";
import unit from "../../utils/unit";

const borderWidth = 1;

interface LinkProps {
	href: string;
	title: string;
	openInNewTab?: boolean;
	children: ReactNode;
}

const Link = styled.a.attrs(({ openInNewTab }: LinkProps) => ({
	target: openInNewTab ? "_blank" : undefined,
}))<LinkProps>`
	${() => css`
		display: inline-block;
		color: ${({ theme }) => theme.colors.tertiary};
		text-decoration: none;

		&:hover {
			border-bottom: ${unit(borderWidth)} solid ${({ theme }) => theme.colors.tertiary};
		}
	`}
`;

export default Link;
