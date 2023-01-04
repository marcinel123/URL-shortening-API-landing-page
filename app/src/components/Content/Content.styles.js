import styled from "styled-components";


export const StyledSection = styled.section`
  max-width: 80rem;
  height: 100vh;
  margin-top: 20px;
  padding-left: 128px;
  display: flex;
`;
export const StyledDiv = styled.div`
  margin-top: 80px;
  display: flex;
  width: 600px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const StyledH2 = styled.h2`
  margin-top: 0;
  color: black;
  margin-bottom: 4px;
  line-height: 70px;
  font-size: 60px;
  font-weight: 700;
`;
export const StyledP = styled.p`
  margin-top: -5px;
  margin-bottom: 25px;
  color: hsl(0, 0%, 75%);
`;
export const StyledButton = styled.button`
  border: none;
  background-color: hsl(180, 66%, 49%);
  width: 9rem;
  height: 45px;
  border-radius: 30px;
  color: white;
  font-size: 14px;
  font-weight: 700;
`;
export const StyledImgWrapper = styled.div`
  max-height: 100%;
  max-width: 690px;
  overflow: hidden;
`;

export const StyledImg = styled.img`
  padding-left: 100px;
  max-height: 90%;
`;