import styled from "styled-components";
import { Header } from "./components/Header";
import { GlobalStyles } from "./utils/GlobalStyles";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 1440px;
  background-color: antiquewhite;
`;
