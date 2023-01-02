import styled from "styled-components";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { GlobalStyles } from "./utils/GlobalStyles";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <Content/>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 1440px;
  background-color: antiquewhite;
`;
