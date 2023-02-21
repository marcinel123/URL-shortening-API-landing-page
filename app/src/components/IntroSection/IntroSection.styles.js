import styled from "styled-components";

export const StyledSection = styled.section`
  @media screen and (min-width: 350px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    margin: 0 auto;
    width: 80%;
    display: flex;
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    margin: 0 auto;
    width: 80%;
    display: flex;
    max-width: 80rem;
  }
`;
export const StyledDiv = styled.div`
  @media screen and (min-width: 350px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  @media (min-width: 1440px) {
    display: flex;
    width: 60%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;
export const StyledH2 = styled.h2`
  @media (min-width: 350px) {
    width: 90%;
    font-size: 2rem;
    line-height: 38px;
    text-align: center;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 768px) {
    margin: 3px 0;
    width: 80%;
    font-size: 2.5rem;
    line-height: 2.5rem;
    text-align: left;
  }
  @media (min-width: 1440px) {
    width: 100%;
    margin-top: 0;
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 4px;
    line-height: 5rem;
    font-size: 4.5rem;
    font-weight: 700;
    text-align: left;
  }
`;
export const StyledP = styled.p`
  @media (min-width: 350px) {
    color: ${(props) => props.theme.colors.gray};
    width: 70%;
    font-size: 1rem;
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    font-size: 0.75rem;
    width: 80%;
    text-align: left;
  }
  @media (min-width: 1440px) {
    text-align: left;
    font-size: 1.35rem;
    width: 32rem;
    margin-top: -5px;
    margin-bottom: 25px;
    color: ${(props) => props.theme.colors.gray};
  }
`;
export const StyledButton = styled.button`
  @media (min-width: 350px) {
    margin-bottom: 180px;
    width: 10rem;
    font-size: 1rem;
    text-align: center;
    background-color: ${(props) => props.theme.colors.cyan};
    height: 2.5rem;
    border-radius: 30px;
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-weight: 700;
    border: none;
    :hover {
      opacity: 0.5;
      cursor: pointer;
    }
  }
`;
export const StyledImgWrapper = styled.div`
  @media screen and (min-width: 350px) {
    margin: 45px 0;
    width: 80%;
    max-height: auto;
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    box-sizing: border-box;
    max-height: auto;
    width: 55%;
    margin-bottom: 200px;
    margin-left: 10px;
    padding-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    max-height: 90%;
    width: 50%;
    margin-bottom: 200px;
  }
`;

export const StyledImg = styled.img`
  @media screen and (min-width: 350px) {
    padding: 0;
    width: 80%;
    max-height: 110%;
    padding-left: 0px;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
    padding-top: 30px;
  }

  @media screen and (min-width: 1440px) {
    max-height: auto;
    width: 100%;
  }
`;
