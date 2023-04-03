import React from 'react';
import {Link} from "react-router-dom";
import {FooterLinksList, FooterUsefulLinks} from "./footer-body.styles";

function FooterBody() {
    return (
        <div className="container">
            <FooterUsefulLinks>
                <FooterLinksList>
                    <li className="title">Category</li>
                    <li><Link to="/men">Men</Link></li>
                    <li><Link to="/men">Women</Link></li>
                    <li><Link to="/men">Accessories</Link></li>
                    <li><Link to="/men">Beauty</Link></li>
                </FooterLinksList>
                <FooterLinksList>
                    <li className="title">Information</li>
                    <li><a href={"https://seller-olma.vercel.app"} target={"_blank"}>Seller Page</a></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/faq">FAQs</Link></li>
                </FooterLinksList>
                <FooterLinksList>
                    <li className="title">Useful Links</li>
                    <li><Link to="/">Term & Condition</Link></li>
                    <li><Link to="/">Returns & Exchanges</Link></li>
                    <li><Link to="/">Shipping 7& Delivery</Link></li>
                    <li><Link to="/">Privacy Policy </Link></li>
                </FooterLinksList>
                <FooterLinksList>
                    <li className="title">Contact Us</li>
                    <li><Link to="https://maps.google.com" target="_blank">Uzbekistan, Namangan</Link></li>
                    <li><Link to="tel:+998-97-681-50-07">+998976815007</Link></li>
                    <li><Link to="https://maps.google.com" target="_blank">All week 25/7</Link></li>
                    <li><Link to="https://gmail.com" target="_blank">dovudkhonhusanov5007@gmail.com</Link></li>
                </FooterLinksList>
            </FooterUsefulLinks>
        </div>
    );
}

export default FooterBody;