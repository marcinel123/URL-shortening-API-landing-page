import React, { useEffect, useState } from "react";
import api from "../../api/api";
import {
  StyledForm,
  StyledButton,
  StyledInputField,
  Wrapper,
  ErrorParagraph,
} from "./InputElement.styles";

export const InputElement = ({ linksList, setLinksList }) => {
  const [url, setUrl] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("list")) === null) {
      setLinksList([]);
    } else {
      setLinksList(JSON.parse(localStorage.getItem("list")));
    }
  }, []);

  const handleInput = (e) => {
    setUrl(e.target.value);
    setIsVisible(false);
  };

  const shortenLink = async (e) => {
    e.preventDefault();
    if (url.trim().length > 0) {
      try {
        const response = await api.get(`/shorten?url=${url}`);
        setLinksList([
          ...linksList,
          { longLink: url, shortLink: response.data.result.short_link },
        ]);
        localStorage.setItem(
          "list",
          JSON.stringify([
            ...linksList,
            { longLink: url, shortLink: response.data.result.short_link },
          ])
        );
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
      setUrl("");
    } else {
      setIsVisible(true);
    }
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
        <StyledButton onClick={shortenLink}>Shorten It!</StyledButton>
      </Wrapper>
      {isVisible ? (
        <ErrorParagraph className="error">Please add link</ErrorParagraph>
      ) : (
        ""
      )}
    </StyledForm>
  );
};
