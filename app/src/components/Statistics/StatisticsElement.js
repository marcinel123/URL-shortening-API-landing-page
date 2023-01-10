import React from "react";
import { StatisticsBox } from "./StatisticsElement.styles";

export const StatisticsElement = ({ title, description, icon }) => {
  return (
    <StatisticsBox>
      <img src={icon} alt="Icon" />
      <p>{title}</p>
      <p>{description}</p>
    </StatisticsBox>
  );
};
