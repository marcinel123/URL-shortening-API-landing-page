import styled from "styled-components";

export const StyledFooter = styled.footer`
  @media (min-width: 350px) {
    width: 100%;
    background-color: ${(props) => props.theme.colors.veryDarkViolet};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

export const StyledLogo = styled.div`
  @media (min-width: 350px) {
    margin-top: 40px;
    margin-bottom: 50px;
    margin-right: 100px;
    margin-left: 100px;
    font-size: 2rem;
    color: ${(props) => props.theme.colors.white};
    font-weight: 700;
  }
  @media (min-width: 768px) {
    margin-top: 20px;
    margin-bottom: 5px;
  }
`;

export const Heading = styled.h5`
  @media (min-width: 350px) {
    margin-top: 25px;
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.colors.white};
    text-align: center;
    @media (min-width: 768px) {
      text-align: left;
    }
  }
`;
export const StyledList = styled.ul`
  margin: 0;
  margin-bottom: 40px;
  padding: 0;
  list-style: none;
`;

export const StyledListElement = styled.li`
  @media (min-width: 350px) {
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.colors.gray};
    margin-bottom: 10px;
    text-align: center;
  }
  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const StyledIconDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const StyledIconImg = styled.img`
  margin: 0 5px;
  margin-top: 20px;
`;
