import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
  }
`;
const theme = {
  light: {
    backgroundColor: "#ffffff",
    textColor: "#000000",
  },
  dark: {
    backgroundColor: "#1a1a1a",
    textColor: "#ffffff",
  },
};

export default function ThemeProvider({ children, currentTheme }) {
  return (
    <StyledThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
}
