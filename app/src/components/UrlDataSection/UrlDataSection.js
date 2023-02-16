import React, { useEffect, useState } from "react";
import api from "../../api/api";
import { FormElement } from "../FormElement/FormElement";
import { LinksList } from "../LinksList/LinksList";
import { StyledWrapper } from "./UrlDataSection.styles";

export const UrlDataSection = () => {
  const [linksList, setLinksList] = useState([]);

  const [url, setUrl] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("list")) === null) {
      setLinksList([]);
    } else {
      setLinksList(JSON.parse(localStorage.getItem("list")));
    }
  }, []);

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
      setIsVisible2(true);
    }
  };

  return (
    <StyledWrapper>
      <FormElement
        linksList={linksList}
        setLinksList={setLinksList}
        shortenLink={shortenLink}
        url={url}
        setUrl={setUrl}
        isVisible={isVisible}
        isVisible2={isVisible2}
        setIsVisible={setIsVisible}
        setIsVisible2={setIsVisible2}
      />
      <LinksList linksList={linksList} />
    </StyledWrapper>
  );
};
