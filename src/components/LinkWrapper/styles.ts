import styled, { css, DefaultTheme } from 'styled-components';

import { LinkWrapperProps } from '.';

type WrapperProps = Pick<LinkWrapperProps, 'isFloat'>;

const wrapperModifiers = {
  fixed: (theme: DefaultTheme) => css`
    position: fixed;
    z-index: 1100; // bigger than leaflet
    top: ${theme.spacings.medium};
    right: ${theme.spacings.medium};
  `
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isFloat }) => css`
    color: ${theme.colors.white};
    cursor: pointer;

    svg {
      transition: color ${theme.transition.default};

      &:hover {
        color: ${theme.colors.cyan};
      }
    }

    ${!!isFloat && wrapperModifiers.fixed(theme)}
  `}
`;
