import React from 'react'
import ShortylLogo from "../../images/logo.svg"
import IconFacebook from "../../images/icon-facebook.svg"
import IconInstagram from "../../images/icon-instagram.svg"
import IconPinterest from "../../images/icon-pinterest.svg"
import IconTwitter from "../../images/icon-twitter.svg"
import { StyledFooter } from './Footer.styles'

export const Footer = () => {
  return (
    <StyledFooter>
        <img src={ShortylLogo}/>
        <div>
            <h5>Features</h5>
            <ul>
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analitics</li>
            </ul>
        </div>
        <div>
            <h5>Rescources</h5>
            <ul>
                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
            </ul>
        </div>
        <div>
            <h5>Company</h5>
            <ul>
                <li>About</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
            <img src={IconFacebook}/>
            <img src={IconInstagram}/>
            <img src={IconPinterest}/>
            <img src={IconTwitter}/>
        </div>
    </StyledFooter>
  )
}
