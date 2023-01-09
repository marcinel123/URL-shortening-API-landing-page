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
  width: 33.33rem;
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
  color: ${(props) => props.theme.colors.gray};
`;
export const StyledButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme.colors.cyan};
  width: 9rem;
  height: 45px;
  border-radius: 30px;
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: 700;
`;
export const StyledImgWrapper = styled.div`
  max-height: 100%;
  max-width: 38.33rem;
  overflow: hidden;
`;

export const StyledImg = styled.img`
  padding-left: 100px;
  max-height: 90%;
`;
