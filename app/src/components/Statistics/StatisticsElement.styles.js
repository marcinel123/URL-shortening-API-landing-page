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
    height: 25%;
    max-height: 14rem;
    width: 30%;
    max-width: 20rem;
    display: flex;
    flex-direction: column;
    padding: 15px 25px;
  }
`;

export const StyledImgSpan = styled.span`
  @media (min-width: 350px) {
    top: -35px;
    left: 5.5rem;
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
  margin-top: 50px;
  color: ${(props) => props.theme.colors.black};
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.large};
`;

export const StyledDescription = styled.p`
  margin-top: 0px;
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.gray};
  @media (max-width: 42.5rem) {
    text-align: center;
  }
`;
