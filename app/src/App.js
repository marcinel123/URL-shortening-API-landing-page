import { StyledWrapper } from "./App.styles";
import { Header } from "./components/Header/Header";
import { IntroSection } from "./components/IntroSection/IntroSection";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme";
import { Statistics } from "./components/Statistics/Statistics";
import { BoostElement } from "./components/BoostElement/BoostElement";
import { Footer } from "./components/Footer/Footer";
import { UrlDataSection } from "./components/UrlDataSection/UrlDataSection";

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StyledWrapper>
          <Header />
          <IntroSection />
          <UrlDataSection />
          <Statistics />
          <BoostElement />
          <Footer />
        </StyledWrapper>
      </ThemeProvider>
    </>
  );
};
