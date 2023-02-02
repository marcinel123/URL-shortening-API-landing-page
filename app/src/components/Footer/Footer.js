import React from 'react'
import ShortylLogo from "../../images/logo.svg"
import IconFacebook from "../../images/icon-facebook.svg"
import IconInstagram from "../../images/icon-instagram.svg"
import IconPinterest from "../../images/icon-pinterest.svg"
import IconTwitter from "../../images/icon-twitter.svg"
import { StyledFooter, StyledLogo, Heading, StyledList, StyledListElement, StyledIconDiv,
    StyledIconImg } from './Footer.styles'

export const Footer = () => {
  return (
    <StyledFooter>
        <StyledLogo>Shortly</StyledLogo>
        <div>
            <Heading>Features</Heading>
            <StyledList>
                <StyledListElement>Link Shortening</StyledListElement>
                <StyledListElement>Branded Links</StyledListElement>
                <StyledListElement>Analitics</StyledListElement>
            </StyledList>
        </div>
        <div>
            <Heading>Rescources</Heading>
            <StyledList>
                <StyledListElement>Blog</StyledListElement>
                <StyledListElement>Developers</StyledListElement>
                <StyledListElement>Support</StyledListElement>
            </StyledList>
        </div>
        <div>
            <Heading>Company</Heading>
            <StyledList>
                <StyledListElement>About</StyledListElement>
                <StyledListElement>Our Team</StyledListElement>
                <StyledListElement>Careers</StyledListElement>
                <StyledListElement>Contact</StyledListElement>
            </StyledList>
        </div>
        <StyledIconDiv>
            <StyledIconImg src={IconFacebook}/>
            <StyledIconImg src={IconInstagram}/>
            <StyledIconImg src={IconPinterest}/>
            <StyledIconImg src={IconTwitter}/>
        </StyledIconDiv>
    </StyledFooter>
  )
}
