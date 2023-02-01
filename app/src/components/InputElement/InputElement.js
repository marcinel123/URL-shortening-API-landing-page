import React from "react";
import {
  StyledForm,
  StyledButton,
  StyledInputField,
  StyledWrapper,
} from "./InputElement.styles";

export const InputElement = () => {
  return (
    <StyledForm>
      <label htmlFor="url_input"></label>
      <StyledInputField
        id="url_input"
        type="text"
        placeholder="Shorten a link here..."
      />
      <StyledButton>Shorten It!</StyledButton>
    </StyledForm>
  );
};
