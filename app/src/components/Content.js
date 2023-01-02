import React from 'react'
import styled from 'styled-components'

export const Content = () => {
  return (
    <StyledSection>
        <StyledDiv>
            <StyledH2>More than just shorter links</StyledH2>
            <p>Build your brand's recognition and get 
                detailed insights on how you links are performing.</p>
                <button>Get Started</button>
        </StyledDiv>
        <div>
            <img src="../utils/images/logo.svg" alt="illustration-working"/>
        </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
padding-left: 130px;
display: flex;
`

const StyledDiv = styled.div`
display: flex;
width: 600px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`

const StyledH2 = styled.h2`
color: black;
margin-bottom: 4px;
line-height: 70px;
font-size: 60px;
font-weight: 700;
`


