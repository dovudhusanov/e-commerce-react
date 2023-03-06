import React from 'react';
import {CategoryModal, CategoryModalItems} from "./CategoryCaegorie.styled";
import {NavLink} from "react-router-dom";
import {categoryList} from "../../../../data/data";

function CategoriesModal({showCategories, setShowCategories}) {
    return (
        <CategoryModal showCategories={showCategories} onClick={(e) => e.stopPropagation()}>
            {categoryList.map((item, index) => (
                <NavLink to={`/categories/${item.pathName}`} onClick={() => setShowCategories(false)}><CategoryModalItems key={index}><span>{item.icon}</span>{item.categoryName}</CategoryModalItems></NavLink>
            ))}
        </CategoryModal>
    );
}

export default CategoriesModal;