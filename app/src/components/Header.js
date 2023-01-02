import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Header = () => {
  return (
    <StyledHeader>
        <MenuLinks>
        <NavLink>Shortly</NavLink>
        <NavLink>Features</NavLink>
        <NavLink>Pricing</NavLink>
        <NavLink>Resources</NavLink>
        </MenuLinks>
        <Buttons>
            <button>Login</button>
            <button>Sign up</button>
        </Buttons>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
width: 1440px;
display: flex;
align-items: center;
justify-content: space-around;
`
const MenuLinks = styled.div`
display: flex;
width: 800px;
align-items: center;
justify-content: space-evenly;
`
const Buttons = styled.div`
width: 300px;
display: flex;
`

