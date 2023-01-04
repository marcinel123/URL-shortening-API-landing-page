import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <MenuLinks>
        <Shortly>Shortly</Shortly>
        <StyledNavLinks>Features</StyledNavLinks>
        <StyledNavLinks>Pricing</StyledNavLinks>
        <StyledNavLinks>Resources</StyledNavLinks>
      </MenuLinks>
      <Buttons>
        <Login>Login</Login>
        <SingUp>Sign up</SingUp>
      </Buttons>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
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
const MenuLinks = styled.div`
  display: flex;
  width: 800px;
  align-items: center;
  justify-content: flex-start;
`;
const Shortly = styled(NavLink)`
  font-size: 28px;
  color: black;
  font-weight: 700;
  text-decoration: none;
`;
const StyledNavLinks = styled(NavLink)`
  margin-left: 30px;
  font-size: 14px;
  color: hsl(0, 0%, 75%);
  font-weight: 700;
  text-decoration: none;
`;

const Buttons = styled.div`
  width: 300px;
  display: flex;
`;

const Login = styled.button`
  border: none;
  background-color: white;
  color: hsl(0, 0%, 75%);
  font-size: 14px;
  font-weight: 700;
`;
const SingUp = styled.button`
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
