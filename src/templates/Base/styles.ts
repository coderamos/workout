import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.section`
  ${() => css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
  `}
`;

export const Content = styled.section`
  flex: 1 0 auto;
  align-items: center;
  text-align: center;
  display: flex;
`;

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.extraSmall};
    padding-top: ${theme.spacings.extraLarge};
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);
    ${media.greaterThan('medium')`
      padding-top: calc(${theme.spacings.extraLarge} * 2);
      clip-path: polygon(0 10%, 100% 0%, 100% 100%, 0 100%);
    `}
  `}
`;
