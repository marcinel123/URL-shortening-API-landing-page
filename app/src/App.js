import { StyledWrapper } from "./App.styles";
import { Header } from "./components/Header";
import { Content } from "./components/Content/Content";
import { InputElement } from "./components/InputElement";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import {theme} from "./Theme"

export const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledWrapper>
        <Header />
        <Content />
        <InputElement />
      </StyledWrapper>
      </ThemeProvider>
    </>
  );
};


