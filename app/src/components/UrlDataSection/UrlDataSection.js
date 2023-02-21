import React, { useEffect, useState } from "react";
import { useShorteningApi } from "../../api/useShorteningApi";
import { FormElement } from "../FormElement/FormElement";
import { LinksList } from "../LinksList/LinksList";
import { StyledWrapper } from "./UrlDataSection.styles";

export const UrlDataSection = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);
  const { getApi, linksList, setLinksList } = useShorteningApi(url);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("list")) === null) {
      setLinksList([]);
    } else {
      setLinksList(JSON.parse(localStorage.getItem("list")));
    }
  }, []);

  const shortenLink = (e) => {
    e.preventDefault();
    if (url.trim().length > 0) {
      getApi();
      setUrl("");
    } else {
      setError(true);
    }
  };

  return (
    <StyledWrapper>
      <FormElement
        shortenLink={shortenLink}
        url={url}
        setUrl={setUrl}
        error={error}
        setError={setError}
      />
      <LinksList linksList={linksList} />
    </StyledWrapper>
  );
};
