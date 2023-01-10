import React from "react";
import { StyledForm, StyledButton, StyledInputField } from "./InputElement.styles";

export const InputElement = () => {
  return (
    <StyledForm>
      <label for="url_input"></label>
      <StyledInputField id="url_input" type="text" placeholder="      Shorten a link here..."/>
      <StyledButton>Shorten It!</StyledButton>
    </StyledForm>
  );
};
