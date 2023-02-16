import React from "react";
import { useApi } from "../../api/useApi";
import { FormElement } from "../FormElement/FormElement";
import { LinksList } from "../LinksList/LinksList";
import { StyledWrapper } from "./UrlDataSection.styles";

export const UrlDataSection = () => {
  const {
    shortenLink,
    linksList,
    setLinksList,
    url,
    setUrl,
    isVisible,
    setIsVisible,
    isVisible2,
    setIsVisible2,
  } = useApi();

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
