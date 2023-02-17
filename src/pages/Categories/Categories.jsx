import React from 'react';
import {useParams} from "react-router-dom";

function Categories() {

    const {categoryName} = useParams()

    return (
        <div className="container">
            <h1 style={{marginTop: "40px"}}>{categoryName.split("-").join(" ")}</h1>
        </div>
    );
}

export default Categories;