import React from "react";
import {
  StyledForm,
  StyledButton,
  StyledInputField,
  Wrapper,
  ErrorParagraph,
} from "./FormElement.styles";

export const FormElement = ({ url, setUrl, shortenLink, error, setError }) => {
  const handleInput = (e) => {
    setUrl(e.target.value);
    setError(false);
  };

  return (
    <StyledForm>
      <Wrapper>
        <label htmlFor="url_input"></label>
        <StyledInputField
          value={url}
          id="url_input"
          type="text"
          placeholder="Shorten a link here..."
          onChange={handleInput}
          className={`${error ? true : ""}`}
        />
        {error && (
          <ErrorParagraph className="error">Please add link</ErrorParagraph>
        )}
      </Wrapper>
      <StyledButton onClick={shortenLink}>Shorten It!</StyledButton>
    </StyledForm>
  );
};
