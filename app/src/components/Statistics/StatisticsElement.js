import React from "react";
import {
  StatisticsBox,
  StyledImgSpan,
  StyledTitle,
  StyledDescription,
} from "./StatisticsElement.styles";

export const StatisticsElement = ({ title, description, icon, id }) => {
  return (
    <StatisticsBox className={`box-${id}`}>
      <StyledImgSpan>
        <img width="37" height="37" src={icon} alt="Icon" />
      </StyledImgSpan>

      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </StatisticsBox>
  );
};
