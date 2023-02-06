import React from "react";
import { LinksList } from "../LinksList/LinksList";
import { StatisticsElement } from "./StatisticsElement";
import { statisticsData } from "./StatisticsData";
import {
  LineThrough,
  StyledWrapper,
  StyledHeader,
  StyledHeading,
  StyledDescription,
  StyledStatiscticsElements,
} from "./Statistics.styles";

export const Statistics = ({ linksList }) => {
  return (
    <StyledWrapper>
      <LinksList linksList={linksList} />
      <StyledHeader>
        <StyledHeading>Advanced Statistics</StyledHeading>
        <StyledDescription>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </StyledDescription>
      </StyledHeader>
      <StyledStatiscticsElements>
        <LineThrough />
        {statisticsData.map(({ icon, title, description, id }) => {
          return (
            <StatisticsElement
              key={id}
              icon={icon}
              title={title}
              description={description}
              id={id}
            />
          );
        })}
      </StyledStatiscticsElements>
    </StyledWrapper>
  );
};
