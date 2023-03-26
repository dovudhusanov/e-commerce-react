import React, {useEffect, useState} from 'react';
import {UserSettingsFormStyle, BottomItems, UserSettingsInput, UserSettingsInputs} from "./user-settings-form.styles";
import {Link} from "react-router-dom";
import {Button} from "../../../../../../components";
import {UserInfoEditApi} from "../../../../../../api/user-info-edit-api";
import {UserInfoGetApi} from "../../../../../../api/user-info-get-api";
import {toast} from "react-toastify";
import {GetUserApi} from "../../../../../../api/get-user-api";
import {UserCreateApi} from "../../../../../../api/user-create-api";

function UserSettingsForm() {

    const [profileCreated, setProfileCreated] = useState([])

    async function getUserInfo() {
        const userRes = await GetUserApi(localStorage.getItem("userId"))
        const response = await UserInfoGetApi(localStorage.getItem("profileId"))
        setProfileCreated(userRes.data)

        setInputValue({
            first_name: response.data.first_name,
            last_name: response.data.last_name,
            email: response.data.email,
        });
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
        if(profileCreated.profile) {
            const userRes = await GetUserApi(localStorage.getItem("userId"))
            userRes?.data?.profile && localStorage.setItem("profileId", userRes.data.profile)
            await UserInfoEditApi({
                first_name: inputValue.first_name,
                last_name: inputValue.last_name,
                email: inputValue.email
            }, localStorage.getItem("profileId"))
                .then(res => {
                    toast.success('Successfully saved!');
                    console.log(res)
                })
                .catch(error => {
                    toast.error('Error!');
                    console.error(error)
                })
        } else {
            await UserCreateApi({first_name: inputValue.first_name, last_name: inputValue.last_name, email: inputValue.email})
                .then(res => {
                    toast.success("Successfully saved!")
                    console.log(res)
                })
                .catch(error => {
                    toast.error("Wrong")
                })
        }
    }

    return (
        <UserSettingsFormStyle>
            <UserSettingsInputs onSubmit={handleSubmit}>
                <UserSettingsInput>
                    <label htmlFor={"first_name"}>Name</label>
                    <input type="text" id={"first_name"} placeholder="First Name" value={inputValue.first_name} name={"first_name"} onChange={handleChange}/>
                </UserSettingsInput>
                <UserSettingsInput>
                    <label htmlFor={"last_name"}>Last Name</label>
                    <input type="text" id={"last_name"} placeholder="Last Name" value={inputValue.last_name} name={"last_name"} onChange={handleChange}/>
                </UserSettingsInput>
                <UserSettingsInput>
                    <label htmlFor={"email"}>Email</label>
                    <input type="email" id={"email"} placeholder="E-mail" value={inputValue.email} name={"email"} onChange={handleChange}/>
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
                    <Button type="submit">Save</Button>
                </UserSettingsInput>
            </UserSettingsInputs>
            <BottomItems>
                <div>
                    <Button type={"button"} className="btn-cancel">delete account</Button>
                </div>
            </BottomItems>
        </UserSettingsFormStyle>
    );
}

export default UserSettingsForm;