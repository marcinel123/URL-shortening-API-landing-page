import styled from "styled-components";

export const StyledListWrapper = styled.section`
  margin: 0 auto;
  margin-top: 100px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    margin-top: 80px;
  }
`;

export const StyledListElement = styled.div`
  border-radius: 5px;
  margin: 10px 0;
  height: 8rem;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    margin: 20px 0;
    width: 90%;
    height: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

export const StyledLinkandBtnWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    width: 40%;
  }
  @media (min-width: 1440px) {
    width: 40%;
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
    width: 60%;
    margin: 0 10%;
    margin-right: 0;
    font-size: ${(props) => props.theme.fontSizes.medium};
  }

  @media (min-width: 1440px) {
    font-size: ${(props) => props.theme.fontSizes.large};
  }
`;
export const StyledLongLink = styled.p`
  margin: 0;
  padding: 10px 0;
  padding-left: 5%;
  text-align: left;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.black};
  @media (min-width: 768px) {
    margin-right: 20%;
    padding: 0;
    width: 30%;
    border: none;
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
  @media (min-width: 1440px) {
    font-size: ${(props) => props.theme.fontSizes.large};
  }
`;

export const StyledCopyButton = styled.button`
  font-size: ${(props) => props.theme.fontSizes.small};
  width: 100%;
  padding: 0;
  height: 2rem;
  background-color: ${(props) => props.theme.colors.cyan};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 5px;
  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.medium};
    width: 30%;
    margin-left: 20px;
    height: 2.5rem;
  }
  @media (min-width: 1440px) {
    font-size: ${(props) => props.theme.fontSizes.large};
    height: 3rem;
  }
`;
