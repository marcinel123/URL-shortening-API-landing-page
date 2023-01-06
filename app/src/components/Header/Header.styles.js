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
`;
export const StyledNavigation = styled.div`
  display: flex;
  width: 800px;
  align-items: center;
  justify-content: flex-start;
`;
export const StyledLogoNavLink = styled(NavLink)`
  font-size: 28px;
  color: black;
  font-weight: 700;
  text-decoration: none;
`;
export const StyledNavLink = styled(NavLink)`
  margin-left: 30px;
  font-size: 14px;
  color: hsl(0, 0%, 75%);
  font-weight: 700;
  text-decoration: none;
`;

export const StyledButtonsWrapper = styled.div`
  width: 300px;
  display: flex;
`;

export const StyledLoginButton = styled.button`
  border: none;
  background-color: white;
  color: hsl(0, 0%, 75%);
  font-size: 14px;
  font-weight: 700;
`;
export const StyledSignUpButton = styled.button`
  border: none;
  background-color: hsl(180, 66%, 49%);
  width: 90px;
  height: 30px;
  border-radius: 20px;
  color: white;
  font-size: 14px;
  margin-left: 20px;
  font-weight: 700;
`;
