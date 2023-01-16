import styled from "styled-components";
import { NavLink } from "react-router-dom";
import burgerMenu from "../../images/menu-burger.png";

export const StyledHeader = styled.div`
  margin: 0;
  padding: 0;
  padding-left: 105px;
  width: 1440px;
  height: 120px;
  padding-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 42.5rem) {
    width: 20.85rem;
    padding: 0;
    margin-bottom: -20px;
    position: relative;
  }
`;
export const StyledNavigation = styled.div`
  display: flex;
  width: 44.44rem;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 42.5rem) {
    width: 20.85rem;
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
`;
export const StyledLogoNavLink = styled(NavLink)`
  font-size: 28px;
  color: ${(props) => props.theme.colors.black};
  font-weight: 700;
  text-decoration: none;
  @media (max-width: 42.5rem) {
    font-size: 2rem;
    margin-right: 175px;
    margin-left: 20px;
  }
`;
export const StyledNavLink = styled(NavLink)`
  margin-left: 30px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.gray};
  font-weight: 700;
  text-decoration: none;
  @media (max-width: 42.5rem) {
    display: none;
  }
`;

export const StyledDropDownButton = styled.button`
  display: none;
  background-color: ${(props) => props.theme.colors.white};
  background-image: url(${burgerMenu});
  background-repeat: no-repeat;
  border: none;
  width: 1.5rem;
  height: 1.75rem;
  @media (max-width: 42.5rem) {
    display: block;
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
  margin-left: 50px;
  width: 16.67rem;
  display: flex;
  @media (max-width: 42.5rem) {
    display: none;
  }
`;

export const StyledLoginButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.gray};
  font-size: 14px;
  font-weight: 700;
  @media (max-width: 42.5rem) {
    width: 100%;
    background-color: ${(props) => props.theme.colors.darkViolet};
    height: 6.5rem;
    font-size: 1rem;
    text-align: center;
    padding: 20px 0px;
  }
`;
export const StyledSignUpButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme.colors.cyan};
  width: 5rem;
  height: 1.67rem;
  border-radius: 20px;
  color: ${(props) => props.theme.colors.white};
  font-size: 14px;
  margin-left: 20px;
  font-weight: 700;
  @media (max-width: 42.5rem) {
    margin: 0;
    margin-bottom: 10px;
    width: 97%;
    height: 5.5rem;
    text-align: center;
    font-size: 1rem;
    padding: 10px 0px;
    border-radius: 30px;
  }
`;
