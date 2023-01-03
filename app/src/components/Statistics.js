import React from "react";
import styled from "styled-components";
import { StatisticsElement } from "./StatisticsElement";
import brand from '../utils/images/icon-brand-recognition.svg'
import detailed from '../utils/images/icon-detailed-records.svg'
import fully from '../utils/images/icon-fully-customizable.svg'

export const Statistics = () => {

const obj = [
    {title: "Brand Recognition",
    description: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content"
 },
 {
    title: "Detailed Records",
    description: "Gain insights into who is clicking"
 },
 {
    title: "Fully Customizable",
    description: "Improve brand awareness"
 }
]

  return (
    <Wrapper>
      <Header>
        <H2>Advanced Statistics</H2>
        <P>
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </P>
      </Header>
      <Description>
        {obj.map((singleobj)=>{
            return (
                <StatisticsElement title={singleobj.title} description={singleobj.description}/>
            )
        })}
      </Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1440px;
  height: 180vh;
  background: hsl(0, 0%, 95%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Header = styled.div`
margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const H2 = styled.h2`
font-size: 28px;
margin-bottom: 10px;
`
const P = styled.p`
width: 400px;
color: hsl(257, 7%, 63%);
font-size: 14px;
text-align: center;
margin-top: 0;
`

const Description = styled.div`
  width: 1000px;
  height: 200px;
  border-bottom: 5px solid hsl(180, 66%, 49%);
  display: flex;
  justify-content: space-around;
`;
