import styled from "styled-components";
import background from "../../images/bg-shorten-desktop.svg";

export const StyledForm = styled.form`
  position: absolute;
  left: 128px;
  top: 705px;
  border: 1px solid ${(props) => props.theme.colors.black};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7.22rem;
  width: 63rem;
  background-image: url(${background});
  background-color: ${(props) => props.theme.colors.darkViolet};
`;

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.cyan};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 5px;
  height: 2.78rem;
  width: 11rem;
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
`;
