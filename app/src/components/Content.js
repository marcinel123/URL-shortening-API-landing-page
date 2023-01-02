import React from "react";
import styled from "styled-components";
import working from "../utils/images/illustration-working.svg";

export const Content = () => {
  return (
    <StyledSection>
      <StyledDiv>
        <StyledH2>More than just shorter links</StyledH2>
        <StyledP>
          Build your brand's recognition and get detailed insights on how you
          links are performing.
        </StyledP>
        <StyledButton>Get Started</StyledButton>
      </StyledDiv>
      <StyledImgDiv>
        <StyledImg src={working} alt="illustration-working" />
      </StyledImgDiv>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  max-width: 1440px;
  height: 100vh;
  margin-top: 20px;
  padding-left: 128px;
  display: flex;
`;

const StyledDiv = styled.div`
  margin-top: 80px;
  display: flex;
  width: 600px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const StyledH2 = styled.h2`
  margin-top: 0;
  margin-bottom: 2px;
  color: black;
  margin-bottom: 4px;
  line-height: 70px;
  font-size: 60px;
  font-weight: 700;
`;

const StyledP = styled.p`
  margin-top: -5px;
  margin-bottom: 25px;
  color: hsl(0, 0%, 75%);
`;

const StyledButton = styled.button`
  border: none;
  background-color: hsl(180, 66%, 49%);
  width: 150px;
  height: 45px;
  border-radius: 20px;
  color: white;
  font-size: 14px;
  font-weight: 700;
`;

const StyledImgDiv = styled.div`
  max-height: 100%;
  max-width: 690px;
  overflow: hidden
`;

const StyledImg = styled.img`
padding-left: 100px;
max-height: 90%;
`
