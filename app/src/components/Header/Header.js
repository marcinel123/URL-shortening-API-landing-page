import React, { useState } from "react";

import { StyledHeader } from "./Header.styles";
import { StyledNavigation } from "./Header.styles";
import { StyledLogoNavLink } from "./Header.styles";
import { StyledNavLink } from "./Header.styles";
import { StyledButtonsWrapper } from "./Header.styles";
import { StyledLoginButton, StyledDropDownMenu } from "./Header.styles";
import {
  StyledSignUpButton,
  StyledDropDownButton,
  StyledNavLinkInMenu,
  StyledButtonsWrapperInMenu,
} from "./Header.styles";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <StyledHeader>
      <StyledNavigation>
        <StyledLogoNavLink>Shortly</StyledLogoNavLink>
        <StyledNavLink>Features</StyledNavLink>
        <StyledNavLink>Pricing</StyledNavLink>
        <StyledNavLink>Resources</StyledNavLink>
        <StyledDropDownButton onClick={handleMenu}></StyledDropDownButton>
        <StyledDropDownMenu className={isVisible ? "dropdown_menu" : ""}>
          <StyledNavLinkInMenu>Features</StyledNavLinkInMenu>
          <StyledNavLinkInMenu>Pricing</StyledNavLinkInMenu>
          <StyledNavLinkInMenu>Resources</StyledNavLinkInMenu>
          <StyledButtonsWrapperInMenu>
            <StyledLoginButton>Login</StyledLoginButton>
            <StyledSignUpButton>Sign up</StyledSignUpButton>
          </StyledButtonsWrapperInMenu>
        </StyledDropDownMenu>
      </StyledNavigation>
      <StyledButtonsWrapper>
        <StyledLoginButton>Login</StyledLoginButton>
        <StyledSignUpButton>Sign up</StyledSignUpButton>
      </StyledButtonsWrapper>
    </StyledHeader>
  );
};
