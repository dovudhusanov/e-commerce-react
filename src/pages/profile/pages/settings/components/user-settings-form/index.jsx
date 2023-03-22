import React, {useState} from 'react';
import {UserSettingsFormStyle, BottomItems, UserSettingsInput, UserSettingsInputs} from "./user-settings-form.styles";
import {Link} from "react-router-dom";
import {Button} from "../../../../../../components";
import {UserInfoEditApi} from "../../../../../../api/user-info-edit-api";
import axiosInstance from "../../../../../../api";

function UserSettingsForm() {

    const [inputValue, setInputValue] = useState({
        firstName: "user",
        lastName: "",
        email: "",
    })

    const handleChange = (e) => {
        setInputValue({...inputValue, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("hello")
        await axiosInstance.put("/profile/edit/", {
            firstName: inputValue.firstName,
            lastName: inputValue.lastName,
            email: inputValue.email
        })
            .then(res => {
                console.log(res)
            })
            .catch(error => console.error(error))
    }

    return (
        <UserSettingsFormStyle>
            <UserSettingsInputs onSubmit={handleSubmit}>
                <UserSettingsInput>
                    <label htmlFor={"firstName"}>Name</label>
                    <input type="text" value={inputValue.firstName} name={"firstName"} onChange={handleChange}/>
                </UserSettingsInput>
                <UserSettingsInput>
                    <label htmlFor={"lastName"}>Last Name</label>
                    <input type="text" value={inputValue.lastName} name={"lastName"} onChange={handleChange}/>
                </UserSettingsInput>
                <UserSettingsInput>
                    <label htmlFor={"email"}>Email</label>
                    <input type="email" value={inputValue.email} name={"email"} onChange={handleChange}/>
                </UserSettingsInput>
                {/*<UserSettingsInput>*/}
                {/*    <label htmlFor={"phoneNumber"}>Phone Number</label>*/}
                {/*    <input type="tel" value={inputValue.phoneNumber} name={"phoneNumber"} onChange={handleChange}/>*/}
                {/*</UserSettingsInput>*/}
                <Button type="submit">Save</Button>
            </UserSettingsInputs>
            <BottomItems>
               <div>
                   <Link to={"/user/change-password"}>change password</Link>
                   <button>delete account</button>
               </div>
            </BottomItems>
        </UserSettingsFormStyle>
    );
}

export default UserSettingsForm;