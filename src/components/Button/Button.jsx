import React from 'react';
import {ButtonStyle} from "./ButtonStyle";

function Button({children, style, onClick, icon, className, productAdded}) {
    return (
        <ButtonStyle.Button productAdded={productAdded?.length !== 0 && productAdded} style={style} onClick={onClick} className={className}>{children}</ButtonStyle.Button>
    );
}

export default Button;