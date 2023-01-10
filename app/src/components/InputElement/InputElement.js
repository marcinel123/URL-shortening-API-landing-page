import React from "react";
import { StyledForm } from "./InputElement.styles";

export const InputElement = () => {
  return (
    <StyledForm>
      <label for="url_input"></label>
      <input id="url_input" type="text" />
      <button>Shorten It!</button>
    </StyledForm>
  );
};
