import React from 'react';
import {ButtonStyle} from "./ButtonStyle";

function Button({children, style, onClick, icon}) {
    return (
        <ButtonStyle.Button style={style} onClick={onClick}>{children}</ButtonStyle.Button>
    );
}

export default Button;