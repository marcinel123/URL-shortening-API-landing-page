import styled from "styled-components";
import background from "../../images/bg-shorten-desktop.svg";

export const StyledForm = styled.form`
  position: relative;
  transform: translateY(-50%);
  background-image: url(${background});
  background-color: ${(props) => props.theme.colors.darkViolet};
  border: 1px solid ${(props) => props.theme.colors.black};
  border-radius: 10px;
  width: 90%;
  padding: 0;
  height: 9.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  .error {
    display: block;
    margin: 0;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 8.5rem;
    width: 80%;
    max-width: 80rem;
    .error {
      display: block;
      margin: 5px;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    align-items: flex-start;
    width: 78%;
    margin: 0;
  }
`;

export const ErrorParagraph = styled.p`
  color: ${(props) => props.theme.colors.redish};
  width: 100%;
  padding-left: 5%;
  @media (min-width: 768px) {
    padding-left: 0;
  }
`;

export const StyledButton = styled.button`
  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
  width: 90%;
  padding: 0;
  height: 3rem;
  background-color: ${(props) => props.theme.colors.cyan};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 5px;

  @media (min-width: 768px) {
    height: 2.78rem;
    width: 15%;
  }
`;

export const StyledInputField = styled.input`
  border: ${(props) => (props.className ? `5px solid #bd6478` : "none")};
  width: 90%;
  padding: 0;
  padding-left: 2%;
  height: 3rem;
  margin: 0;
  margin-bottom: ${(props) => (props.className ? `0` : "18px")};
  ::placeholder {
    padding-left: 10px;
    color: ${(props) => props.theme.colors.gray};
  }

  @media (min-width: 768px) {
    width: 95%;
    height: 2.78rem;
    border-radius: 5px;
    margin: 0;
    ::placeholder {
      padding-left: 30px;
      color: ${(props) => props.theme.colors.gray};
    }
  }
`;
