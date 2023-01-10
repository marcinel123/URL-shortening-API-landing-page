import React from "react";
import { StatisticsElement } from "./StatisticsElement";
import brandIcon from "../../images/icon-brand-recognition.svg";
import detailedIcon from "../../images/icon-detailed-records.svg";
import fullyIcon from "../../images/icon-fully-customizable.svg";
import { StyledWrapper, StyledHeader, StyledHeading, StyledDescription, StyledStatiscticsElements } from "./Statistics.styles";

export const Statistics = () => {
  const obj = [
    {
      title: "Brand Recognition",
      description:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content",
      icon: brandIcon
      },
    {
      title: "Detailed Records",
      description: "Gain insights into who is clicking",
      icon: detailedIcon
    },
    {
      title: "Fully Customizable",
      description: "Improve brand awareness",
      icon: fullyIcon
    },
  ];

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
        {obj.map((singleObj) => {
          return (
            <StatisticsElement
              icon={singleObj.icon}
              title={singleObj.title}
              description={singleObj.description}
            />
          );
        })}
      </StyledStatiscticsElements>
    </StyledWrapper>
  );
};
