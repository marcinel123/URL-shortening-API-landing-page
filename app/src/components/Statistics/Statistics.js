import React from "react";
import { StatisticsElement } from "./StatisticsElement";
import { statisticsData } from "./StatisticsData";
import {
  StyledWrapper,
  StyledHeader,
  StyledHeading,
  StyledDescription,
  StyledStatiscticsElements,
} from "./Statistics.styles";

export const Statistics = () => {

  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledHeading>Advanced Statistics</StyledHeading>
        <StyledDescription>
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </StyledDescription>
      </StyledHeader>
      <StyledStatiscticsElements>
        {statisticsData &&
          statisticsData.map(({ icon, title, description }, index) => {
            return (
              <StatisticsElement
                key={index}
                icon={icon}
                title={title}
                description={description}
              />
            );
          })}
      </StyledStatiscticsElements>
    </StyledWrapper>
  );
};
