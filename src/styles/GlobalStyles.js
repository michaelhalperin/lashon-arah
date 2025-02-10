import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    direction: ${({ theme }) => theme.direction};
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.base};
    color: ${theme.colors.text.primary};
    background-color: ${theme.colors.background.primary};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &.high-contrast {
      background-color: #000 !important;
      color: #fff !important;

      * {
        background-color: #000 !important;
        color: #fff !important;
        border-color: #fff !important;
      }

      a, button {
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  ul, ol {
    list-style: none;
  }
`;
