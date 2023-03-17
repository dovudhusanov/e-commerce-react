import React, {useState} from 'react';
import {UserSettingsFormStyle, BottomItems, UserSettingsInput, UserSettingsInputs} from "./user-settings-form.styles";
import {Link} from "react-router-dom";
import {Button} from "../../../../../../components";

function UserSettingsForm() {

    const [inputValue, setInputValue] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    })

    const handleChange = (e) => {
        setInputValue({...inputValue, [e.target.name]: e.target.value})
    }


    return (
        <UserSettingsFormStyle>
            <UserSettingsInputs>
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
                <UserSettingsInput>
                    <label htmlFor={"phoneNumber"}>Phone Number</label>
                    <input type="tel" value={inputValue.phoneNumber} name={"phoneNumber"} onChange={handleChange}/>
                </UserSettingsInput>
            </UserSettingsInputs>
            <BottomItems>
               <div>
                   <Link to={"/user/change-password"}>change password</Link>
                   <button>delete account</button>
               </div>
                <Button disabled={true}>Save</Button>
            </BottomItems>
        </UserSettingsFormStyle>
    );
}

export default UserSettingsForm;