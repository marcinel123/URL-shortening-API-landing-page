import styled from "styled-components";
import background from "../../images/bg-shorten-desktop.svg";

export const StyledForm = styled.form`
  @media (min-width: 350px) {
    position: absolute;
    background-image: url(${background});
    background-color: ${(props) => props.theme.colors.darkViolet};
    border: 1px solid ${(props) => props.theme.colors.black};
    border-radius: 5px;
    width: 70%;
    padding: 0;
    height: 9.5rem;
    left: 15%;
    top: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 768px) {
    left: 10%;
    top: 43%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 7.22rem;
    width: 80%;
    max-width: 90rem;
  }
`;

export const StyledButton = styled.button`
  @media (min-width: 350px) {
    width: 80%;
    padding: 0;
    height: 3rem;
    background-color: ${(props) => props.theme.colors.cyan};
    color: ${(props) => props.theme.colors.white};
    border: none;
    border-radius: 5px;
  }
  @media (min-width: 768px) {
    height: 2.78rem;
    width: 20%;
  }
`;

export const StyledInputField = styled.input`
  @media (min-width: 350px) {
    width: 80%;
    padding: 0;
    height: 3rem;
    margin: 0;
    margin-bottom: 18px;
    ::placeholder {
      padding-left: 30px;
      color: ${(props) => props.theme.colors.gray};
    }
  }
  @media (min-width: 768px) {
    width: 70%;
    height: 2.78rem;
    border: none;
    border-radius: 5px;
    margin: 0;
    margin-right: 1rem;
  }
`;
