import React, {useState} from 'react';
import {ChangePasswordStyles} from "./change-password.styles"
import {Button} from "../../../../components";
import {ChangePasswordApi} from "../../../../api/change-password-api";
import img from "../../../../assets/change-password.png"
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

function ChangePassword() {

    const [value, setValue] = useState({
        oldPassword: "",
        newPassword: ""
    })

    const [error, setError] = useState("")

    const navigate = useNavigate()

    const handleChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await ChangePasswordApi({old_password: value.oldPassword, new_password: value.newPassword})
            toast.success('Password successfully changed!');
            navigate(-1)
        } catch (error) {
            setError("")
            toast.error('Please enter a password with a combination of letters and numbers');
            console.log(error.message)
        }
    }

    return (
        <div className="container">
            <ChangePasswordStyles>
                <img src={img} alt="change password"/>
                <form onSubmit={handleSubmit}>
                    <h1>Change Password</h1>
                    <input
                        type="text"
                        onChange={handleChange}
                        value={value.oldPassword}
                        name={"oldPassword"}
                        placeholder="Old Password"
                    />
                    <input
                        type="text"
                        onChange={handleChange}
                        value={value.newPassword}
                        name={"newPassword"}
                        placeholder="New Password"
                    />
                    <p>{error}</p>
                    <div>
                        <Button type={"submit"}>submit</Button>
                        <Link to="/user/settings" >
                            <Button type={"button"} className="btn-cancel">
                                cancel
                            </Button>
                        </Link>
                    </div>
                </form>
            </ChangePasswordStyles>
        </div>
    );
}

export default ChangePassword;