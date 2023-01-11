import styled from "styled-components";

export const StyledWrapper = styled.section`
  width: 80rem;
  height: 100vh;
  background: ${(props) => props.theme.colors.gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
export const StyledHeader = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledHeading = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
`;
export const StyledDescription = styled.p`
  width: 22.22rem;
  color: ${(props) => props.theme.colors.grayishViolet};
  font-size: 14px;
  text-align: center;
  margin-top: 0;
`;

export const StyledStatiscticsElements = styled.div`
margin-top: 60px;
  width: 55.56rem;
  height: 11.2rem;
  display: flex;
  justify-content: space-around;
  position: relative;
`;

export const LineThrough = styled.div`
margin-top: 135px;
width: 500px;
height: 0.4rem;
background-color: ${props=>props.theme.colors.cyan};
position: absolute;
`
