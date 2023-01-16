import styled from "styled-components";

export const StyledWrapper = styled.section`
  width: 80rem;
  background: ${(props) => props.theme.colors.gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 42.5rem) {
    width: 20.85rem;
  }
`;
export const StyledHeader = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 42.5rem) {
    width: 19rem;
    padding: 0;
    margin-bottom: -60px;
  }
`;

export const StyledHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
  @media (max-width: 42.5rem) {
    font-size: 1.65rem;
  }
`;
export const StyledDescription = styled.p`
  width: 29rem;
  color: ${(props) => props.theme.colors.grayishViolet};
  font-size: ${(props) => props.theme.fontSizes.medium};
  text-align: center;
  margin-top: 0;
  @media (max-width: 42.5rem) {
    width: 19rem;
    padding: 0;
    margin-bottom: 100px;
  }
`;

export const StyledStatiscticsElements = styled.div`
  background: ${(props) => props.theme.colors.gray};
  margin-top: 60px;
  width: 63rem;
  display: flex;
  justify-content: space-around;
  position: relative;
  margin-bottom: 100px;
  .box-1 {
    margin-top: 40px;
  }
  .box-2 {
    margin-top: 80px;
  }
  @media (max-width: 42.5rem) {
    margin: 50px 0px;
    width: 16rem;
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
`;

export const LineThrough = styled.div`
  margin-top: 135px;
  width: 500px;
  height: 0.4rem;
  background-color: ${(props) => props.theme.colors.cyan};
  position: absolute;
  @media (max-width: 42.5rem) {
    width: 0.4rem;
    height: 500px;
    margin: 0 auto;
    left: 142px;
  }
`;
