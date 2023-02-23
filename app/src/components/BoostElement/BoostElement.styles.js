import styled from "styled-components";
import backgroundBoostMobile from "../../images/bg-boost-mobile.svg";
import backgroundBoostDesktop from "../../images/bg-boost-desktop.svg";

export const StyledWrapper = styled.section`
  @media (min-width: 350px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-image: url(${backgroundBoostMobile});
    background-color: ${(props) => props.theme.colors.darkViolet};
  }
  @media (min-width: 768px) {
    background-image: url(${backgroundBoostDesktop});
  }
`;

export const StyledH2 = styled.h2`
  @media (min-width: 350px) {
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fontSizes.large};
    margin-top: 60px;
  }
  @media (min-width: 768px) {
    margin-top: 45px;
    margin-bottom: 15px;
  }
`;

export const StyledButton = styled.button`
  @media (min-width: 350px) {
    width: 10rem;
    font-size: 1rem;
    text-align: center;
    background-color: ${(props) => props.theme.colors.cyan};
    height: 2.75rem;
    border-radius: 30px;
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-weight: 700;
    border: none;
    margin: 10px 0;
    margin-bottom: 70px;
    :hover {
      opacity: 0.7;
      cursor: pointer;
    }
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
`;
