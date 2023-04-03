import React from 'react';
import FooterTop from "./components/footer-top/footer-top";
import FooterBody from "./components/footer-body/footer-body";
import FooterBottom from "./components/footer-bottom/footer-bottom";
import {FooterStyles} from "./footer.styles";

function Footer() {
    return (
        <FooterStyles>
            <FooterTop />
            <FooterBody />
            <FooterBottom />
        </FooterStyles>
    );
}

export default Footer;