import React from "react";
import {
  StyledForm,
  StyledButton,
  StyledInputField,
  Wrapper,
  ErrorParagraph,
} from "./FormElement.styles";

export const FormElement = ({
  url,
  shortenLink,
  setUrl,
  isVisible,
  isVisible2,
  setIsVisible,
  setIsVisible2,
}) => {
  const handleInput = (e) => {
    setUrl(e.target.value);
    setIsVisible(false);
    setIsVisible2(false);
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
          className={`${isVisible ? true : ""}`}
        />
        {isVisible ? (
          <ErrorParagraph className="error">Please add link</ErrorParagraph>
        ) : (
          ""
        )}
        <StyledButton onClick={shortenLink}>Shorten It!</StyledButton>
      </Wrapper>
      {isVisible2 ? (
        <ErrorParagraph className="error2">Please add link</ErrorParagraph>
      ) : (
        ""
      )}
    </StyledForm>
  );
};
