import React, {useEffect, useState} from 'react';
import {UserSettingsFormStyle, BottomItems, UserSettingsInput, UserSettingsInputs} from "./user-settings-form.styles";
import {Link, useNavigate} from "react-router-dom";
import {Button, Loader, WarningPopup} from "../../../../../../components";
import {DeleteUserApi, UserInfoEditApi, UserInfoGetApi, GetUserApi, UserCreateApi, LogoutApi} from "../../../../../../api";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {logout} from "../../../../../../action/auth-login-action";
import {setImageChanged, setLoggedIn} from "../../../../../../reducer/change-image-states-reducer";
function UserSettingsForm() {

    const [profileCreated, setProfileCreated] = useState([])
    const [loading, setLoading] = useState(false)
    const [popup, setPopup] = useState(false)

    async function getUserInfo() {
        setLoading(true)
        const userRes = await GetUserApi(localStorage.getItem("userId"))
        localStorage.setItem("oldPhone", userRes.data[0].phone)
        userRes?.data[0]?.profile && localStorage.setItem("profileId", userRes.data[0].profile)
        const response = userRes?.data[0]?.profile && await UserInfoGetApi(localStorage.getItem("profileId"))
        setProfileCreated(userRes[0]?.data)

        setInputValue({
            first_name: response?.data[0].first_name,
            last_name: response?.data[0].last_name,
            email: response?.data[0].email,
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

    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {first_name, last_name, email} = inputValue
        if (profileCreated.profile) {
            setIsLoading(true)
            const userRes = await GetUserApi(localStorage.getItem("userId"))
            userRes?.data[0]?.profile && localStorage.setItem("profileId", userRes?.data[0].profile)
            console.log(userRes.data[0].profile)
            await UserInfoEditApi({
                first_name, last_name, email
            }, localStorage.getItem("profileId"))
                .then(_ => toast.success('Successfully saved!'))
                .catch(_ => toast.error('Error!'))
            setIsLoading(false)
        } else {
            setIsLoading(true)
            await UserCreateApi({first_name, last_name, email})
                .then(_ => toast.success("Successfully saved!"))
                .catch(_ => toast.error("Wrong"))
            setIsLoading(false)
        }
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()

    async function handleLogout() {
        await LogoutApi({
            refresh: localStorage.getItem("refresh"),
            headers: {Authorization: `Bearer ${localStorage.getItem("access")}`}
        });
        dispatch(logout());
        dispatch(setImageChanged(false))
        dispatch(setLoggedIn(false))
        navigate("/");
    }


    async function handleDeleteAccount(e) {
        e.preventDefault()
        try {
            await DeleteUserApi(localStorage.getItem("userId"))
           localStorage.clear()
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
                            <Button type="submit" loading={isLoading && true} disabled={
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
