import styled from "styled-components";

export const StyledWrapper = styled.section`
  @media screen and (min-width: 350px) {
    width: 100%;
    background: ${(props) => props.theme.colors.gray};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;
export const StyledHeader = styled.div`
  @media screen and (min-width: 350px) {
    width: 60%;
    padding: 0;
    margin-bottom: -60px;
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;
export const StyledDescription = styled.p`
  @media (min-width: 350px) {
    color: ${(props) => props.theme.colors.grayishViolet};
    font-size: ${(props) => props.theme.fontSizes.medium};
    width: 90%;
    padding: 0;
    margin-bottom: 100px;
    text-align: center;
    margin-top: 0;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const StyledStatiscticsElements = styled.div`
  @media (min-width: 350px) {
    margin: 50px 0px;
    width: 60%;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .box-1 {
      margin-top: 80px;
    }
    .box-2 {
      margin-top: 80px;
    }
  }
  @media screen and (min-width: 768px) {
    background: ${(props) => props.theme.colors.gray};
    margin-top: 60px;
    width: 80%;
    max-width: 80rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: relative;
    margin-bottom: 100px;
    .box-1 {
      margin-top: 60px;
    }
    .box-2 {
      margin-top: 100px;
    }
  }
`;

export const LineThrough = styled.div`
  @media (min-width: 350px) {
    background-color: ${(props) => props.theme.colors.cyan};
    position: absolute;
    width: 0.4rem;
    height: 30%;
    left: 50%;
    z-index: 0;
  }
  @media screen and (min-width: 768px) {
    margin-top: 100px;
    left: 5%;
    width: 70%;
    height: 0.4rem;
  }
`;
