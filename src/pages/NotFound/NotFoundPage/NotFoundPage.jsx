import React, {useEffect} from 'react';
import {NotFoundPageStyle} from "./NotFoundPageStyle";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "../../../components";
import {ChangeTitle} from "../../../middleware";

function NotFoundPage() {

    ChangeTitle("Nothing found :(")

    const navigate = useNavigate()
    useEffect(() => {
        navigate("/404");
    }, [window.location.pathname]);

    return (
        <div className="container">
            <NotFoundPageStyle.NotFound>
                <h1>Nothing found :(</h1>
                <Link to="/">
                    <Button>Back to Home</Button>
                </Link>
            </NotFoundPageStyle.NotFound>
        </div>
    );
}

export default NotFoundPage;