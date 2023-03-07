import React from 'react';
import {useDispatch} from "react-redux";
import {logout} from "../../action/AuthLoginAction";
import {useNavigate} from "react-router-dom";
import {LogoutApi} from "../../api/LogoutApi";

function Profile() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const ref = localStorage.getItem("refresh")

    async function handleLogout() {
        const res = await LogoutApi(ref)
        console.log(res)
        localStorage.removeItem("access");
        localStorage.removeItem("refresh")
        dispatch(logout())
        navigate("/")
    }

    return (
        <div>
            <button onClick={handleLogout}>Log out</button>
        </div>
    );
}

export default Profile;