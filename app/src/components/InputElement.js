import React from 'react'
import styled from 'styled-components'
import background from '../utils/images/bg-shorten-desktop.svg'

export const InputElement = () => {
  return (
    <StyledDiv>
        <StyledInput type="text" placeholder='       Shorten a link here...' size="65"/>
        <StyledButton>Shorten It!!</StyledButton>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
position: absolute;
left: 270px;
top: 687px;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
height: 110px;
width: 900px;
background-image: url(${background});
background-color: hsl(255, 11%, 22%);
`

const StyledInput = styled.input`
height: 45px;
border-radius: 5px;
border: none;
margin-right: 15px;
color: hsl(0, 0%, 75%);
`

const StyledButton = styled.button`
  border: none;
  background-color: hsl(180, 66%, 49%);
  width: 155px;
  height: 45px;
  border-radius: 5px;
  color: white;
  font-size: 14px;
  font-weight: 500;
`;
