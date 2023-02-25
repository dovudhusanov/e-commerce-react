import React from 'react';
import {ButtonStyle} from "./ButtonStyle";

function Button({children, style, onClick, icon, className}) {
    return (
        <ButtonStyle.Button style={style} onClick={onClick} className={className}>{children}</ButtonStyle.Button>
    );
}

export default Button;