import React from "react";
import {
  StyledListWrapper,
  StyledListElement,
  StyledLinkandBtnWrapper,
} from "./LinksList.styles";

export const LinksList = ({ linksList }) => {
  return (
    <StyledListWrapper>
      {linksList.map((singleLink, index) => {
        return (
          <StyledListElement key={index}>
            <p>{singleLink.longLink}</p>{" "}
            <StyledLinkandBtnWrapper>
              <p>{singleLink.shortLink}</p> <button>Copy</button>
            </StyledLinkandBtnWrapper>
          </StyledListElement>
        );
      })}
    </StyledListWrapper>
  );
};
