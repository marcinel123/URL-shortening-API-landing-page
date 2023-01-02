import React from 'react'
import styled from 'styled-components'
import background from '../utils/images/bg-shorten-desktop.svg'

export const InputElement = () => {
  return (
    <StyledDiv>
        <input type="text"/>
        <button>Shorten It!</button>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
position: absolute;
left: 270px;
border: 1px solid black;
display: flex;
align-items: center;
justify-content: center;
height: 110px;
width: 900px;
background-image: url(${background});
`
