import React from 'react';
import {ButtonStyle} from "./ButtonStyle";

function Button({children, style}) {
    return (
        <ButtonStyle.Button style={style}>{children}</ButtonStyle.Button>
    );
}

export default Button;