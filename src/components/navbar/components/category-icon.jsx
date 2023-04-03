import React from 'react';
import {CategoryBtnBottom, CategoryBtnRect, CategoryBtnTop, CategoryIcon} from "./navbar-bottom/navbar-bottom.styles";

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