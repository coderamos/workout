import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;

    .leaflet-container {
      background-color: ${theme.colors.black};
    }
  `}
`;
