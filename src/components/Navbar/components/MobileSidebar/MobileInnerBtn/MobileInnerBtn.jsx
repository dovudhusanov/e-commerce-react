import React from 'react';
import {InnerBtn, InnerBtnIcon, InnerBtnText} from "../MobileSidear.styles";
import {Link} from "react-router-dom";

function MobileInnerBtn({icon, link, title, target}) {
    return (
        <InnerBtn>
            <InnerBtnIcon>
                {icon}
            </InnerBtnIcon>
            <InnerBtnText>
                <Link to={link} target={target}>{title}</Link>
            </InnerBtnText>
        </InnerBtn>
    );
}

export default MobileInnerBtn;