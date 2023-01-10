import styled from "styled-components";
import background from "../../images/bg-shorten-desktop.svg";

export const StyledForm = styled.form`
  position: absolute;
  left: 128px;
  top:705px;
  border: 1px solid ${(props)=>props.theme.colors.black};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 130px;
  width: 63rem;
  background-image: url(${background});
  background-color: ${(props)=>props.theme.colors.darkViolet};
`;

export const StyledButton = styled.button`
background-color: ${(props)=>props.theme.colors.cyan};
color: ${(props)=>props.theme.colors.white};
border: none;
border-radius: 5px;
height: 50px;
width: 11rem;
`

export const StyledInputField = styled.input`
width: 45rem;
height: 50px;
border: none;
border-radius: 5px;
margin-right: 1rem;
::placeholder {
    color: ${(props)=>props.theme.colors.gray};
  }
`
