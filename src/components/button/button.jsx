import React from 'react';
import {ButtonStyles} from "./button.styles";

function Button({children, style, onClick, icon, className, productAdded}) {
    return (
        <ButtonStyles.Button productAdded={productAdded?.length !== 0 && productAdded} style={style} onClick={onClick} className={className}>{children}</ButtonStyles.Button>
    );
}

export default Button;