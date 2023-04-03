import React from 'react';
import {
    FooterBarItems,
    FooterBarTitle, FooterSocialIcon, FooterSocialLinks,
    FooterTopBar,
    FooterTopContact, FooterTopContactButton,
    FooterTopContactInput
} from "./footer-top.styles";

function FooterTop() {
    return (
        <FooterTopBar>
            <div className="container">
                <FooterBarItems>
                    <FooterBarTitle>be in touch with us:</FooterBarTitle>
                    <FooterTopContact>
                        <FooterTopContactInput type="email" placeholder="Enter your email"/>
                        <FooterTopContactButton>join us</FooterTopContactButton>
                    </FooterTopContact>
                    <FooterSocialLinks>
                        <FooterSocialIcon className="fa-brands fa-facebook"></FooterSocialIcon>
                        <FooterSocialIcon className="fa-brands fa-twitter"></FooterSocialIcon>
                        <FooterSocialIcon className="fa-brands fa-instagram"></FooterSocialIcon>
                        <FooterSocialIcon className="fa-brands fa-pinterest"></FooterSocialIcon>
                    </FooterSocialLinks>
                </FooterBarItems>
            </div>
        </FooterTopBar>
    );
}

export default FooterTop;