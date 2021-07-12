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
    justify-content: space-between;
    border-bottom: 0.4rem solid ${theme.colors.cyan};
    margin-bottom: ${theme.spacings.extraLarge};
  `}
`;

export const HeaderLogoWrapper = styled.div`
  ${() => css``}
`;

export const HeaderText = styled.h1`
  ${({ theme }) => css`
    text-transform: capitalize;
    font-size: ${theme.font.sizes.extraLarge};
    font-weight: ${theme.font.weights.semiBold};
  `}
`;

export const BodyWrapper = styled.section`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.extraLarge};
  `}
`;

export const Date = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.weights.light};
  `}
`;

export const PlaceName = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.displayExtraSmall};
    font-weight: ${theme.font.weights.black};
  `}
`;

export const PlaceDescription = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: 1.6;
  `}
`;

export const SectionTitle = styled.h3`
  ${({ theme }) => css`
    text-transform: uppercase;
    margin-top: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.extraLarge};
  `}
`;

export const SectionContent = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`;

export const StackCardWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    border: 0.2rem solid ${theme.colors.cyan};
    border-radius: ${theme.border.radius.large};
    padding: ${theme.spacings.medium};
  `}
`;

export const StackName = styled.span`
  ${({ theme }) => css`
    text-transform: uppercase;
    font-weight: ${theme.font.weights.black};
  `}
`;

export const OpenPositionsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: ${theme.spacings.small};
  `}
`;

export const OpenPositionsText = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.light};
  `}
`;

export const OpenPositionsValue = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.semiBold};
  `}
`;

export const AnnualAverageSallaryWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: ${theme.spacings.small};
  `}
`;

export const AnnualAverageSallaryText = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.light};
  `}
`;

export const AnnualAverageSallaryValue = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.semiBold};
  `}
`;

export const GalleryWrapper = styled.div`
  ${() => css``}
`;

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
    display: flex;
    flex-direction: column;
  `}
`;

export const ImageDescriptionWrapper = styled.div`
  ${() => css`
    display: flex;
    justify-content: flex-end;
  `}
`;

export const ImageDescription = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.light};
    font-size: ${theme.font.sizes.small};
  `}
`;
