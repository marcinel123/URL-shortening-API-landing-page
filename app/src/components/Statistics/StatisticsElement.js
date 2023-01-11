import React from "react";
import { StatisticsBox, StyledImgSpan, StyledTitle, StyledDescription } from "./StatisticsElement.styles";

export const StatisticsElement = ({ title, description, icon, id }) => {

  return (
    <StatisticsBox style={{marginTop:id*40}}>
      <StyledImgSpan><img width="37" height="37" src={icon} alt="Icon" /></StyledImgSpan>
      
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </StatisticsBox>
  );
};
