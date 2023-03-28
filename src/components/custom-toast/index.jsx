import React from 'react';
import {Link} from "react-router-dom";
import {Buttons, Popup, PopupBack, Product, ProductInfo} from "./custom-toast.styles";

function AddToCartPopup({img, descr, setShowPopup, showPopup}) {
    return (
        <PopupBack showPopup={showPopup}>
           <Popup>
               <Product>
                   <img src={img} alt={descr}/>
                   <ProductInfo>
                       <h4>Product added to cart</h4>
                       <span>{descr}</span>
                   </ProductInfo>
               </Product>
               <Buttons>
                   <i className="fa-solid fa-xmark" onClick={() => setShowPopup(false)}></i>
                   <Link to={"/cart"}>Go to cart</Link>
               </Buttons>
           </Popup>
        </PopupBack>
    );
}

export default AddToCartPopup;
