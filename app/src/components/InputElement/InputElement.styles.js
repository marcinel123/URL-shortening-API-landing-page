import styled from "styled-components";
import background from "../../images/bg-shorten-desktop.svg";

export const StyledForm = styled.form`
  position: absolute;
  left: 270px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 110px;
  width: 900px;
  background-image: url(${background});
`;
