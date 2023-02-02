import styled from "styled-components";

export const StatisticsBox = styled.div`
  @media (min-width: 350px) {
    align-items: center;
    padding-bottom: 25px;
    background-color: ${(props) => props.theme.colors.white};
    height: 25%;
    position: relative;
    width: 90%;
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 768px) {
    height: 70%;
    max-height: 15rem;
    width: 30%;
    max-width: 20rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px 25px;
  }
  @media (min-width: 1440px) {
    height: 25%;
  }
`;

export const StyledImgSpan = styled.span`
  @media (min-width: 350px) {
    top: -35px;
    margin: 0 auto;
    position: absolute;
    text-align: center;
    box-sizing: border-box;
    padding-top: 18px;
    background-color: ${(props) => props.theme.colors.veryDarkBlue};
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
  }
  @media (min-width: 768px) {
    left: 23px;
  }
`;

export const StyledTitle = styled.p`
@media (min-width: 350px) {
  margin-top: 50px;
  color: ${(props) => props.theme.colors.black};
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.large};
}
@media (min-width: 768px) {
  margin-top: 25px;
  margin-bottom: 10px;
}
@media (min-width: 1440px) {
  margin-top: 50px;
}
`;

export const StyledDescription = styled.p`
  @media (min-width: 350px) {
    width:85%;
    text-align: center;
    margin-top: 0px;
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.colors.gray};
  }
  @media (min-width: 768px) {
    text-align: left;
  }
`;
