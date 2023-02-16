import React from 'react';
import {ScrollTop} from "../../middleware/scrollTop";
import ChangeTitle from "../../middleware/changeTitle";

function Home() {
    ScrollTop();
    ChangeTitle("E-Commerce")


    return (
        <div></div>
    );
}

export default Home;