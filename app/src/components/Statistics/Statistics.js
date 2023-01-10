import React, { useEffect, useState } from "react";
import { StatisticsElement } from "./StatisticsElement";
import { StatisticsData } from "./StatisticsData";
import {
  StyledWrapper,
  StyledHeader,
  StyledHeading,
  StyledDescription,
  StyledStatiscticsElements,
} from "./Statistics.styles";

export const Statistics = () => {
  const [Data, setData] = useState(null);

  useEffect(() => {
    setData(StatisticsData);
  }, []);

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
        {Data &&
          Data.map(({ icon, title, description }, index) => {
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
