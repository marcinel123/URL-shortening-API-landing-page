import styled from "styled-components";

export const StatisticsBox = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  height: 13.5rem;
  width: 18.5rem;
  display: flex;
  flex-direction: column;
  padding: 15px 25px;
  position: relative;
  @media (max-width: 42.5rem) {
    align-items: center;
    padding-bottom: 25px;
  }
`;

export const StyledImgSpan = styled.span`
  position: absolute;
  top: -35px;
  left: 23px;
  text-align: center;
  box-sizing: border-box;
  padding-top: 18px;
  background-color: ${(props) => props.theme.colors.veryDarkBlue};
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  @media (max-width: 42.5rem) {
    left: 131px;
  }
`;

export const StyledTitle = styled.p`
  margin-top: 50px;
  color: ${(props) => props.theme.colors.black};
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.large};
`;

export const StyledDescription = styled.p`
  margin-top: 0px;
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.gray};
  @media (max-width: 42.5rem) {
    text-align: center;
  }
`;
