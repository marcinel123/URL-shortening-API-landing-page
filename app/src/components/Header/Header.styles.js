import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.div`
  margin: 0;
  padding: 0;
  padding-left: 60px;
  width: 1440px;
  height: 120px;
  padding-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 42.5rem) {
    width: 20.85rem;
    padding: 0;
  }
`;
export const StyledNavigation = styled.div`
  display: flex;
  width: 44.44rem;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 42.5rem) {
    width: 20.85rem;
    justify-content: space-around;
  }
`;
export const StyledLogoNavLink = styled(NavLink)`
  font-size: 28px;
  color: ${(props) => props.theme.colors.black};
  font-weight: 700;
  text-decoration: none;
  @media (max-width: 42.5rem) {
    font-size: 2rem;
    margin-right: 25px;
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
  background-color: aliceblue;
  border: 6px solid blue;
`;

export const StyledButtonsWrapper = styled.div`
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
`;
