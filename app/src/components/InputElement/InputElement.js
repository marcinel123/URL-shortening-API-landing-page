import React, { useEffect, useState } from "react";
import api from "../../api/api";
import {
  StyledForm,
  StyledButton,
  StyledInputField,
  StyledLinksList,
} from "./InputElement.styles";

export const InputElement = ({ linksList, setLinksList }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("list")) === null) {
      setLinksList([]);
    } else {
      setLinksList(JSON.parse(localStorage.getItem("list")));
    }
  }, []);

  const handleInput = (e) => {
    setUrl(e.target.value);
  };
  const shortenLink = async (e) => {
    e.preventDefault();
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
  };

  return (
    <>
      <StyledForm>
        <label htmlFor="url_input"></label>
        <StyledInputField
          value={url}
          id="url_input"
          type="text"
          placeholder="Shorten a link here..."
          onChange={handleInput}
          required
        />
        <StyledButton onClick={shortenLink}>Shorten It!</StyledButton>
        {url.length ? "" : "Please add a link"}
      </StyledForm>
    </>
  );
};
