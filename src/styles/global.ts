import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components';

type GlobalStylesProps = {
  removeBackgroundColor?: boolean;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: ${props => props.theme.font.family};
  }

  ${({ theme, removeBackgroundColor }) => css`
    html {
      font-size: 62.5%;
    }

    html,
    body,
    #___next {
      color: ${theme.colors.white};
      height: 100%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};

      ::-webkit-scrollbar {
        background-color: ${theme.colors.black};
        width: 0.8rem;
      }
      ::-webkit-scrollbar-track {
        background-color: ${theme.colors.black};
        border-radius: ${theme.border.radius.medium};
      }
      ::-webkit-scrollbar-thumb {
        background-color: ${theme.colors.pictonBlue};
        border-radius: ${theme.border.radius.medium};
      }

      ${!removeBackgroundColor &&
      css`
        background-color: ${theme.colors.black};
      `}
    }
  `}
`;

export default GlobalStyles;
