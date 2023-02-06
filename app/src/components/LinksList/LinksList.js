import React from "react";
import { StyledListWrapper, StyledListElement } from "./LinksList.styles";

export const LinksList = ({ linksList }) => {
  return (
    <StyledListWrapper>
      {linksList.map((singleLink, index) => {
        return (
          <StyledListElement key={index}>
            https://{singleLink.longLink} - {singleLink.shortLink}
          </StyledListElement>
        );
      })}
    </StyledListWrapper>
  );
};
