import React from 'react';
import {CategoryModal} from "./NavbarCategoryModalStyle"

function NavbarCategoryModal({showCategory}) {
    return (
        <CategoryModal.ModalCategory showCategory={showCategory}>
            <CategoryModal.Modal>
                <CategoryModal.ModalItems>
                    <CategoryModal.Close>
                        <i className="fa-solid fa-xmark"></i>
                    </CategoryModal.Close>
                </CategoryModal.ModalItems>
            </CategoryModal.Modal>
            <CategoryModal.Shadow></CategoryModal.Shadow>
        </CategoryModal.ModalCategory>

    );
}

export default NavbarCategoryModal;