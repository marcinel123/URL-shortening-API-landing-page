import styled from "styled-components";

export const StyledListWrapper = styled.section`
  margin: 0 auto;
  margin-top: -60px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    margin-top: 0px;
    margin-bottom: 0;
  }
`;

export const StyledListElement = styled.div`
  border-radius: 5px;
  margin: 10px 0;
  height: auto;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    margin: 20px 0;
    width: 89%;
    min-height: 5.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 1%;
  }
`;

export const StyledLinkandBtnWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .copied {
    background-color: ${(props) => props.theme.colors.darkViolet};
  }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    margin-left: 0;
  }
  @media (min-width: 1440px) {
    width: 60%;
    margin-left: 0;
  }
`;

export const StyledShortLink = styled.p`
  padding: 10px 0;
  margin: auto 0;
  text-align: left;
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.cyan};
  width: 100%;
  @media (min-width: 768px) {
    width: 40%;
    margin-right: 5%;
    font-size: ${(props) => props.theme.fontSizes.medium};
  }

  @media (min-width: 1440px) {
    font-size: ${(props) => props.theme.fontSizes.large};
    margin-right: 5%;
  }
`;
export const StyledLongLink = styled.p`
  margin: 0;
  padding: 10px 0;
  text-align: left;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  width: 90%;
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.black};
  overflow: hidden;
  @media (min-width: 768px) {
    padding: 0;
    width: 45%;
    border: none;
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
  @media (min-width: 1440px) {
    width: 60%;
    max-width: 34rem;
    font-size: ${(props) => props.theme.fontSizes.large};
    margin-right: 3%;
    margin-left: 2%;
  }
`;

export const StyledCopyButton = styled.button`
  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
  font-size: ${(props) => props.theme.fontSizes.small};
  width: 100%;
  padding: 0;
  height: 2rem;
  background-color: ${(props) => props.theme.colors.cyan};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.medium};
    width: 20%;
    margin-left: 20%;
    height: 2.5rem;
  }
  @media (min-width: 1440px) {
    width: 30%;
    max-width: 10rem;
    font-size: ${(props) => props.theme.fontSizes.large};
    height: 3rem;
    margin: 0;
    margin-left: 12%;
  }
`;
