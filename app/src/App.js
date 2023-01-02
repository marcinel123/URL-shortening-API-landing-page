import styled from "styled-components";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { InputElement } from "./components/InputElement";
import { GlobalStyles } from "./utils/GlobalStyles";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <Content/>
        <InputElement/>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
position: relative;
  margin: 0;
  padding: 0;
  width: 1440px;
`;
