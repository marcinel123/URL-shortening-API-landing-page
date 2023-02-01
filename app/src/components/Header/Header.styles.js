import styled from "styled-components";
import { NavLink } from "react-router-dom";
import burgerMenu from "../../images/menu-burger.png";

export const StyledHeader = styled.div`
  @media screen and (min-width: 350px) {
    width: 100%;
    padding: 20px 0;
    position: relative;
  }

  @media screen and (min-width: 768px) {
    padding-top: 10px;
    height: 120px;
    margin: 0 auto;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  @media screen and (min-width: 1440px) {
    margin: 0 auto;
    width: 80%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 80rem;
  }
`;
export const StyledNavigation = styled.div`
  @media (min-width: 350px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin: 0px;
    padding: 0px;
    .dropdown_menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      padding: 30px 20px;
      padding-top: 35px;
      top: 100px;
      left: 20px;
      width: 18.5rem;
      height: 20.5rem;
      background-color: ${(props) => props.theme.colors.darkViolet};
      border-radius: 10px;
    }
  }
  @media screen and (min-width: 768px) {
    display: flex;
    width: 60%;
    align-items: center;
    justify-content: flex-start;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    width: 60%;
    align-items: center;
    justify-content: flex-start;
  }
`;
export const StyledLogoNavLink = styled(NavLink)`
  @media screen and (min-width: 350px) {
    color: ${(props) => props.theme.colors.black};
    font-weight: 700;
    font-size: 2rem;
    text-decoration: none;
  }
  @media screen and (min-width: 1440px) {
    font-size: 28px;
  }
`;
export const StyledNavLink = styled(NavLink)`
  @media (min-width: 350px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    margin-left: 30px;
    font-size: 14px;
    color: ${(props) => props.theme.colors.gray};
    font-weight: 700;
    text-decoration: none;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 30px;
    font-size: 14px;
    color: ${(props) => props.theme.colors.gray};
    font-weight: 700;
    text-decoration: none;
  }
`;

export const StyledDropDownButton = styled.button`
  @media (min-width: 350px) {
    display: block;
    background-color: ${(props) => props.theme.colors.white};
    background-image: url(${burgerMenu});
    background-repeat: no-repeat;
    border: none;
    width: 1.5rem;
    height: 1.75rem;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
    display: none;
    background-color: ${(props) => props.theme.colors.white};
    background-image: url(${burgerMenu});
    background-repeat: no-repeat;
    border: none;
    width: 1.5rem;
    height: 1.75rem;
  }
`;

export const StyledDropDownMenu = styled.div`
  display: none;
`;
export const StyledNavLinkInMenu = styled(NavLink)`
  text-align: center;
  width: 100%;
  height: 25px;
  font-size: 18px;
  color: ${(props) => props.theme.colors.gray};
  font-weight: 700;
  text-decoration: none;
  margin-bottom: 33px;
`;

export const StyledButtonsWrapperInMenu = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 4rem;
  width: 95%;
  padding-top: 10px;
`;

export const StyledButtonsWrapper = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    margin-left: 30%;
    width: 20%;
    display: flex;
    align-items: center;
  }
`;

export const StyledLoginButton = styled.button`
  @media screen and (min-width: 350px) {
    width: 100%;
    background-color: ${(props) => props.theme.colors.darkViolet};
    height: 6.5rem;
    font-size: 1rem;
    text-align: center;
    padding: 20px 0px;
  }
  @media screen and (min-width: 768px) {
    border: none;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.gray};
    font-size: 14px;
    font-weight: 700;
  }
`;
export const StyledSignUpButton = styled.button`
  @media screen and (min-width: 350px) {
    margin: 0;
    margin-bottom: 10px;
    width: 97%;
    height: 5.5rem;
    text-align: center;
    font-size: 1rem;
    padding: 10px 0px;
    border-radius: 30px;
  }
  @media screen and (min-width: 768px) {
    text-align: center;
    padding: 0;
    margin: 0;
    border: none;
    background-color: ${(props) => props.theme.colors.cyan};
    width: 10rem;
    height: 2rem;
    border-radius: 20px;
    color: ${(props) => props.theme.colors.white};
    font-size: 14px;
    margin-left: 20px;
    font-weight: 700;
  }
`;
