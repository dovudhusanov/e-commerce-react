import React from 'react';
import {CategoryBtnBottom, CategoryBtnRect, CategoryBtnTop, CategoryIcon} from "./NavbarBottom/NavbarBottomStyle";

function BtnCategoryIcon() {
    return (
        <CategoryIcon>
            <CategoryBtnRect>
                <div></div>
            </CategoryBtnRect>
            <CategoryBtnTop></CategoryBtnTop>
            <CategoryBtnBottom></CategoryBtnBottom>
        </CategoryIcon>
    );
}

export default BtnCategoryIcon;