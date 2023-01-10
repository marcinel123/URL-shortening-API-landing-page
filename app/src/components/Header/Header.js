import React from "react";

import { StyledHeader } from "./Header.styles";
import { StyledNavigation } from "./Header.styles";
import { StyledLogoNavLink } from "./Header.styles";
import { StyledNavLink } from "./Header.styles";
import { StyledButtonsWrapper } from "./Header.styles";
import { StyledLoginButton } from "./Header.styles";
import { StyledSignUpButton } from "./Header.styles";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledNavigation>
        <StyledLogoNavLink>Shortly</StyledLogoNavLink>
        <StyledNavLink>Features</StyledNavLink>
        <StyledNavLink>Pricing</StyledNavLink>
        <StyledNavLink>Resources</StyledNavLink>
      </StyledNavigation>
      <StyledButtonsWrapper>
        <StyledLoginButton>Login</StyledLoginButton>
        <StyledSignUpButton>Sign up</StyledSignUpButton>
      </StyledButtonsWrapper>
    </StyledHeader>
  );
};
