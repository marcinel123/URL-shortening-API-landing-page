import React from "react";
import workingPersonImage from "../../images/illustration-working.svg";
import {
  StyledSection,
  StyledDiv,
  StyledH2,
  StyledP,
  StyledButton,
  StyledImgWrapper,
  StyledImg,
} from "./Content.styles";

export const Content = () => {
  return (
    <StyledSection>
      <StyledDiv>
        <StyledH2>More than just shorter links</StyledH2>
        <StyledP>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </StyledP>
        <StyledButton>Get Started</StyledButton>
      </StyledDiv>
      <StyledImgWrapper>
        <StyledImg src={workingPersonImage} alt="working person image" />
      </StyledImgWrapper>
    </StyledSection>
  );
};
