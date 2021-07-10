import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css``}
`;

export const Content = styled.section`
  ${() => css``}
`;

export const HeaderWrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    height: 6rem;
    justify-content: center;
    border-bottom: 0.4rem solid ${theme.colors.pictonBlue};
    margin-bottom: ${theme.spacings.medium};
  `}
`;

export const HeaderLogoWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: ${theme.spacings.medium};
  `}
`;

export const HeaderText = styled.h1`
  ${({ theme }) => css`
    text-transform: lowercase;
    font-size: ${theme.font.sizes.extraLarge};
    font-weight: ${theme.font.weights.normal};
  `}
`;

export const BodyWrapper = styled.section`
  border: 2px solid yellow;
`;
