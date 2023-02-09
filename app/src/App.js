import { StyledWrapper } from "./App.styles";
import { Header } from "./components/Header/Header";
import { IntroSection } from "./components/IntroSection/IntroSection";
import { InputElement } from "./components/InputElement/InputElement";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme";
import { Statistics } from "./components/Statistics/Statistics";
import { BoostElement } from "./components/BoostElement/BoostElement";
import { Footer } from "./components/Footer/Footer";
import Blank from "./";
import { useState } from "react";

export const App = () => {
  const [linksList, setLinksList] = useState([]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StyledWrapper>
          <Header />
          <IntroSection />
          <InputElement linksList={linksList} setLinksList={setLinksList} />
          <Statistics linksList={linksList} />
          <BoostElement />
          <Footer />
        </StyledWrapper>
      </ThemeProvider>
    </>
  );
};
