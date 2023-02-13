import React, { useState } from "react";
import { FormElement } from "../FormElement/FormElement";
import { LinksList } from "../LinksList/LinksList";
import { StyledWrapper } from "./UrlDataSection.styles";

export const UrlDataSection = () => {
  const [linksList, setLinksList] = useState([]);

  return (
    <StyledWrapper>
      <FormElement linksList={linksList} setLinksList={setLinksList} />
      <LinksList linksList={linksList} />
    </StyledWrapper>
  );
};
