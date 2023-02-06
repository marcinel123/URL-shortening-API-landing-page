import styled from "styled-components";

export const StyledListWrapper = styled.section`
  margin: 0 auto;
  margin-top: 80px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledListElement = styled.div`
  margin: 20px 0;
  height: 4rem;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
`;
