import React from "react";
import { useState } from "react";
import {
  StyledListWrapper,
  StyledListElement,
  StyledLinkandBtnWrapper,
  StyledCopyButton,
  StyledShortLink,
  StyledLongLink,
} from "./LinksList.styles";

export const LinksList = ({ linksList }) => {
  const [selectedBtn, setSelectedBtn] = useState(null);

  const handleClick = (link, index) => {
    navigator.clipboard.writeText(link);
    setSelectedBtn(index);
  };

  return (
    <StyledListWrapper>
      {linksList.map((singleLink, index) => {
        return (
          <StyledListElement key={index}>
            <StyledLongLink>{singleLink.longLink}</StyledLongLink>{" "}
            <StyledLinkandBtnWrapper>
              <StyledShortLink>https://{singleLink.shortLink}</StyledShortLink>{" "}
              <StyledCopyButton
                className={`${index === selectedBtn ? "copied" : ""}`}
                onClick={() => handleClick(singleLink.shortLink, index)}
              >
                {index === selectedBtn ? "Copied" : "Copy"}
              </StyledCopyButton>
            </StyledLinkandBtnWrapper>
          </StyledListElement>
        );
      })}
    </StyledListWrapper>
  );
};
