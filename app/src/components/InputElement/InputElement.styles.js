import styled from "styled-components";
import background from "../../images/bg-shorten-desktop.svg";

export const StyledForm = styled.form`
  position: absolute;
  left: 128px;
  top: 615px;
  border: 1px solid ${(props) => props.theme.colors.black};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7.22rem;
  width: 63rem;
  background-image: url(${background});
  background-color: ${(props) => props.theme.colors.darkViolet};
  @media (max-width: 42.5rem) {
    width: 19rem;
    padding: 0;
    height: 9.5rem;
    left: 15px;
    top: 770px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.cyan};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 5px;
  height: 2.78rem;
  width: 11rem;
  @media (max-width: 42.5rem) {
    width: 17rem;
    padding: 0;
    height: 3rem;
  }
`;

export const StyledInputField = styled.input`
  width: 45rem;
  height: 2.78rem;
  border: none;
  border-radius: 5px;
  margin-right: 1rem;
  ::placeholder {
    padding-left: 30px;
    color: ${(props) => props.theme.colors.gray};
  }
  @media (max-width: 42.5rem) {
    width: 17rem;
    padding: 0;
    height: 3rem;
    margin: 0;
    margin-bottom: 18px;

  }
`;
