import React from 'react';
import {ButtonStyles} from "./button.styles";

function Button({children, style, onClick, type, onSubmit, icon, className, productAdded, disabled}) {
    return (
        <ButtonStyles.Button onSubmit={onSubmit} type={type} disabled={disabled} productAdded={productAdded?.length !== 0 && productAdded}
                             style={style}
                             onClick={onClick} className={className}>{children}</ButtonStyles.Button>
    );
}

export default Button;