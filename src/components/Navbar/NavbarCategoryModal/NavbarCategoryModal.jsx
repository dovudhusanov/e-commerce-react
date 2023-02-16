import React from 'react';
import {CategoryModal} from "./NavbarCategoryModalStyle"

function NavbarCategoryModal({showCategory, setShowCategory}) {

    const clickModalDisabled = (e) => {
        e.stopPropagation()
    }

    return (
        <CategoryModal.ModalCategory showCategory={showCategory} onClick={clickModalDisabled}>
            <CategoryModal.Modal showCategory={showCategory}>
                <CategoryModal.ModalItems>
                    <CategoryModal.Close onClick={() => setShowCategory(false)}>
                        <i className="fa-solid fa-xmark"></i>
                    </CategoryModal.Close>
                </CategoryModal.ModalItems>
            </CategoryModal.Modal>
            <CategoryModal.Shadow></CategoryModal.Shadow>
        </CategoryModal.ModalCategory>

    );
}

export default NavbarCategoryModal;