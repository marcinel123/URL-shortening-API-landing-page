import React from "react";
import {
  StyledListWrapper,
  StyledListElement,
  StyledLinkandBtnWrapper,
  StyledCopyButton,
  StyledShortLink,
  StyledLongLink,
} from "./LinksList.styles";

export const LinksList = ({ linksList }) => {
  return (
    <StyledListWrapper>
      {linksList.map((singleLink, index) => {
        return (
          <StyledListElement key={index}>
            <StyledLongLink>{singleLink.longLink}</StyledLongLink>{" "}
            <StyledLinkandBtnWrapper>
              <StyledShortLink>{singleLink.shortLink}</StyledShortLink>{" "}
              <StyledCopyButton>Copy</StyledCopyButton>
            </StyledLinkandBtnWrapper>
          </StyledListElement>
        );
      })}
    </StyledListWrapper>
  );
};
