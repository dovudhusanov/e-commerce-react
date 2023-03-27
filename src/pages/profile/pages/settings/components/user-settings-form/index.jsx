import React, {useEffect, useState} from 'react';
import {UserSettingsFormStyle, BottomItems, UserSettingsInput, UserSettingsInputs} from "./user-settings-form.styles";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "../../../../../../components";
import {UserInfoEditApi} from "../../../../../../api/profile/user-info-edit-api";
import {UserInfoGetApi} from "../../../../../../api/profile/user-info-get-api";
import {toast} from "react-toastify";
import {GetUserApi} from "../../../../../../api/profile/get-user-api";
import {UserCreateApi} from "../../../../../../api/profile/user-create-api";
import {useDispatch} from "react-redux";
import {LogoutApi} from "../../../../../../api/auth/logout-api";
import {logout} from "../../../../../../action/auth-login-action";
import Loader from "../../../../../../components/loader";
import WarningPopup from "../../../../../../components/warning-popup";
import {DeleteUserApi} from "../../../../../../api/profile/delete-user-api";
import {DeleteProfileApi} from "../../../../../../api/profile/delete-profile-api";

function UserSettingsForm() {

    const [profileCreated, setProfileCreated] = useState([])
    const [loading, setLoading] = useState(false)
    const [popup, setPopup] = useState(false)

    async function getUserInfo() {
        setLoading(true)
        const userRes = await GetUserApi(localStorage.getItem("userId"))
        const response = localStorage.getItem("profileId") && await UserInfoGetApi(localStorage.getItem("profileId"))
        setProfileCreated(userRes?.data)

        setInputValue({
            first_name: response?.data.first_name,
            last_name: response?.data.last_name,
            email: response?.data.email,
        });
        setLoading(false)
    }

    useEffect(() => {
        getUserInfo()
    }, [])

    const [inputValue, setInputValue] = useState({
        first_name: "",
        last_name: "",
        email: "",
    })

    const handleChange = (e) => {
        setInputValue({...inputValue, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {first_name, last_name, email} = inputValue
        if (profileCreated.profile) {
            const userRes = await GetUserApi(localStorage.getItem("userId"))
            userRes?.data?.profile && localStorage.setItem("profileId", userRes.data.profile)
            await UserInfoEditApi({
                first_name, last_name, email
            }, localStorage.getItem("profileId"))
                .then(_ => toast.success('Successfully saved!'))
                .catch(_ => toast.error('Error!'))
        } else {
            await UserCreateApi({first_name, last_name, email})
                .then(_ => toast.success("Successfully saved!"))
                .catch(_ => toast.error("Wrong"))
        }
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()

    async function handleLogout() {
        await LogoutApi({
            refresh: localStorage.getItem("refresh"),
            headers: {Authorization: `Bearer ${localStorage.getItem("access")}`}
        });
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        localStorage.removeItem("userId");
        localStorage.removeItem("profileId");
        dispatch(logout());
        navigate("/");
    }


    async function handleDeleteAccount(e) {
        e.preventDefault()
        try {
            await DeleteUserApi(localStorage.getItem("userId"))
            localStorage.removeItem("access");
            localStorage.removeItem("refresh");
            localStorage.removeItem("userId");
            localStorage.removeItem("profileId");
            navigate("/")
            toast.success("Account successfully deleted")
        }catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            {loading ? (
                <Loader/>
            ) : (
                <UserSettingsFormStyle>
                    <UserSettingsInputs onSubmit={handleSubmit}>
                        <UserSettingsInput>
                            <label htmlFor={"first_name"}>Name</label>
                            <input type="text" id={"first_name"} placeholder="First Name" value={inputValue.first_name}
                                   name={"first_name"} onChange={handleChange}/>
                        </UserSettingsInput>
                        <UserSettingsInput>
                            <label htmlFor={"last_name"}>Last Name</label>
                            <input type="text" id={"last_name"} placeholder="Last Name" value={inputValue.last_name}
                                   name={"last_name"} onChange={handleChange}/>
                        </UserSettingsInput>
                        <UserSettingsInput>
                            <label htmlFor={"email"}>Email</label>
                            <input type="email" id={"email"} placeholder="E-mail" value={inputValue.email}
                                   name={"email"} onChange={handleChange}/>
                        </UserSettingsInput>
                        <UserSettingsInput>
                            <Link to={"/user/change-phone-number"}>
                                <span>change phone number </span>
                                <i className="fa-regular fa-angle-right"></i>
                            </Link>
                        </UserSettingsInput>
                        <UserSettingsInput>
                            <Link to={"/user/change-password"}>
                                <span>change password</span>
                                <i className="fa-regular fa-angle-right"></i>
                            </Link>
                        </UserSettingsInput>
                        <UserSettingsInput>
                            <Button type="submit" disabled={
                                inputValue.first_name === "" && inputValue.last_name === "" && inputValue.email === "" ? "disabled" : ""
                            }>Save Changes</Button>
                        </UserSettingsInput>
                    </UserSettingsInputs>
                    <BottomItems>
                        <div>
                            <Button type={"button"} onClick={handleLogout}>log out</Button>
                            <Button type={"button"} className="btn-cancel" onClick={() => setPopup(true)}>delete account</Button>
                        </div>
                    </BottomItems>
                </UserSettingsFormStyle>
            )}
            {popup && <WarningPopup question={"Are you sure you want to delete your account?"} btnFunction={handleDeleteAccount} buttonText={"Delete"} setPopup={setPopup}/>}
        </>
    );
}

export default UserSettingsForm;