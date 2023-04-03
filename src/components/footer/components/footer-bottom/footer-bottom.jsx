import React from 'react';
import {
    AuthorContainer,
    AuthorName, AuthorText,
    Copyright2, CopyrightText,
    FooterBottomStyles,
    FooterCopyright,
    PaymentMethod, PaymentMethodIcon
} from "./footer-bottom.styles";

function FooterBottom() {
    return (
        <FooterBottomStyles>
            <div className="container">
                <FooterCopyright>
                    <CopyrightText>Copyright &#169; {(new Date().getFullYear())}</CopyrightText>
                    <PaymentMethod>
                        <PaymentMethodIcon src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="footer img"/>
                        <PaymentMethodIcon src="https://upload.wikimedia.org/wikipedia/commons/7/72/MasterCard_early_1990s_logo.png" alt="footer img"/>
                        <PaymentMethodIcon src="https://kapital24.uz/upload/media/icons/cards/system-humo_c.png" alt="footer img"/>
                        <PaymentMethodIcon src="https://logobank.uz:8005/media/logos_png/Uzcard-01.png" alt="footer img"/>
                    </PaymentMethod>
                    <AuthorContainer>
                           <AuthorText>
                        Created By <a href="https://dovudhon.vercel.app" target="_blank"><AuthorName>Dovudhon Husanov</AuthorName></a>
                    </AuthorText>
                        <Copyright2>Copyright &#169; {(new Date().getFullYear())}</Copyright2>
                    </AuthorContainer>
                </FooterCopyright>
            </div>
        </FooterBottomStyles>
    );
}

export default FooterBottom;