import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css``}
`;

export const Content = styled.section`
  ${() => css`
    text-align: center;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `}
`;

export const HeadingWrapper = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.display};
    border: 1px solid red;
    margin-bottom: ${theme.spacings.extraLarge};
  `}
`;

export const BodyWrapper = styled.section`
  ${({ theme }) => css`
    p {
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;
