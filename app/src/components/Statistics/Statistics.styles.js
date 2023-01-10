import styled from "styled-components";

export const StyledWrapper = styled.section`
  width: 80rem;
  height: 180vh;
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
  width: 1000px;
  height: 200px;
  border-bottom: 5px solid ${(props) => props.theme.colors.cyan};
  display: flex;
  justify-content: space-around;
`;
