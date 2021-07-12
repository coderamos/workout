import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css``}
`;

export const Content = styled.section`
  ${() => css`
    display: flex;
    flex-direction: column;
    height: 100%;
  `}
`;

export const HeaderWrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    height: 6rem;
    justify-content: space-between;
    border-bottom: 0.4rem solid ${theme.colors.cyan};
    margin-bottom: ${theme.spacings.medium};
  `}
`;

export const HeaderLogoWrapper = styled.div`
  ${() => css``}
`;

export const HeaderText = styled.h1`
  ${({ theme }) => css`
    text-transform: uppercase;
    font-size: ${theme.font.sizes.extraLarge};
    font-weight: ${theme.font.weights.normal};
  `}
`;

export const BodyWrapper = styled.section``;

export const ProfileCardWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.cyan};
    border-radius: ${theme.border.radius.large};
    padding: ${theme.spacings.medium};
    position: relative;

    margin-top: ${theme.spacings.large};

    & + div {
      margin-top: ${theme.spacings.extraLarge};
    }
  `}
`;

export const PictureWrapper = styled.img`
  ${({ theme }) => css`
    width: 6.8rem;
    height: 6.8rem;
    border-radius: ${theme.border.radius.rounded};
    position: absolute;
    border: 0.4rem solid ${theme.colors.black};
    background-color: ${theme.colors.cyan};
    top: -3.4rem;
  `}
`;

export const ProfileName = styled.strong`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    display: block;
    font-size: ${theme.font.sizes.extraLarge};
  `}
`;

export const ProfileDescription = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    font-size: ${theme.font.sizes.medium};
    color: black;
  `}
`;
