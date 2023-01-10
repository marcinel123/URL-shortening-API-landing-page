import React from 'react'
import styled from 'styled-components'

export const StatisticsElement = ({title, description, icon}) => {
  return (
    <Element>
        <img src={icon} alt="Icon"/>
        <h2>{title}</h2>
        <p>{description}</p>
    </Element>
  )
}

const Element = styled.div`
height: 300px;
width: 200px;
border: 1px solid black;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
`


