import { StyledWrapper } from "./App.styles";
import { Header } from "./components/Header/Header";
import { Content } from "./components/Content/Content";
import { InputElement } from "./components/InputElement/InputElement";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme";
import { Statistics } from "./components/Statistics/Statistics";
import Blank from "./";

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StyledWrapper>
          <Header />
          <Content />
          <InputElement />
          <Statistics />
        </StyledWrapper>
      </ThemeProvider>
    </>
  );
};
