import React, {useEffect, useState} from 'react';
import {UserSettingsFormStyle, BottomItems, UserSettingsInput, UserSettingsInputs} from "./user-settings-form.styles";
import {Link} from "react-router-dom";
import {Button} from "../../../../../../components";
import {UserInfoEditApi} from "../../../../../../api/user-info-edit-api";
import axiosInstance from "../../../../../../api";
import {UserInfoGetApi} from "../../../../../../api/user-info-get-api";
import {toast} from "react-toastify";

function UserSettingsForm() {

    const [user, setUser] = useState([])

    async function getUserInfo() {
        const response = await UserInfoGetApi(4)
        setUser(response.data)
        console.log(response)
    }

    useEffect(() => {
        getUserInfo()
    }, [])

    const {first_name, last_name, email} = user

    const [inputValue, setInputValue] = useState({
        first_name,
        last_name,
        email,
    })

    const handleChange = (e) => {
        setInputValue({...inputValue, [e.target.name]: e.target.value})
    }

    console.log(localStorage.getItem("userId"))

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("hello")
        await UserInfoEditApi({
            first_name: inputValue.first_name,
            last_name: inputValue.last_name,
            email: inputValue.email
        }, localStorage.getItem("userId"))
            .then(res => {
                toast.success('Successfully saved!');
                console.log(res)
            })
            .catch(error => {
                toast.error('Error!');
                console.error(error)
            })
    }

    return (
        <UserSettingsFormStyle>
            <UserSettingsInputs onSubmit={handleSubmit}>
                <UserSettingsInput>
                    <label htmlFor={"first_name"}>Name</label>
                    <input type="text" value={inputValue.first_name} name={"first_name"} onChange={handleChange}/>
                </UserSettingsInput>
                <UserSettingsInput>
                    <label htmlFor={"last_name"}>Last Name</label>
                    <input type="text" value={inputValue.last_name} name={"last_name"} onChange={handleChange}/>
                </UserSettingsInput>
                <UserSettingsInput>
                    <label htmlFor={"email"}>Email</label>
                    <input type="email" value={inputValue.email} name={"email"} onChange={handleChange}/>
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