import styled from "styled-components";

export const StyledSection = styled.section`
  max-width: 80rem;
  margin-top: 20px;
  margin-bottom: 70px;
  padding-left: 160px;
  display: flex;
  @media (max-width: 42.5rem) {
    margin: 0;
    padding: 0;
    flex-direction: column-reverse;
    max-width: 20.85rem;
  }
`;
export const StyledDiv = styled.div`
  margin-top: 70px;
  display: flex;
  width: 41rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 42.5rem) {
    width: 20.85rem;
    align-items: center;
    margin-top: 40px;
  }
`;
export const StyledH2 = styled.h2`
  margin-top: 0;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 4px;
  line-height: 5rem;
  font-size: 4.5rem;
  font-weight: 700;
  @media (max-width: 42.5rem) {
    width: 18rem;
    font-size: 2rem;
    line-height: 38px;
    text-align: center;
    margin-bottom: 20px;
  }
`;
export const StyledP = styled.p`
  font-size: 1.35rem;
  width: 32rem;
  margin-top: -5px;
  margin-bottom: 25px;
  color: ${(props) => props.theme.colors.gray};
  @media (max-width: 42.5rem) {
    width: 18rem;
    font-size: 1rem;
    text-align: center;
  }
`;
export const StyledButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme.colors.cyan};
  width: 10rem;
  height: 2.5rem;
  border-radius: 30px;
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 700;
  @media (max-width: 42.5rem) {
    width: 10rem;
    font-size: 1rem;
    text-align: center;
    margin-bottom: 170px;
  }
`;
export const StyledImgWrapper = styled.div`
  margin-left: 20px;
  max-height: 100%;
  max-width: 38.33rem;
  overflow: hidden;
  @media (max-width: 42.5rem) {
    width: 20.85rem;
    max-height: 110%;
  }
`;

export const StyledImg = styled.img`
  padding-left: 80px;
  max-height: 90%;
  @media (max-width: 42.5rem) {
    padding: 0;
    width: 27rem;
    max-height: 110%;
    padding-left: 0px;
  }
`;
