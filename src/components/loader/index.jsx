import React from 'react';
import {LoaderStyle, LdsSpinner} from "./loader.styles";

function Loader() {
    return (
       <LoaderStyle>
           <LdsSpinner>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
           </LdsSpinner>
       </LoaderStyle>
    );
}

export default Loader;