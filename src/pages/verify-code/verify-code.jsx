import React, {useState} from 'react';
import OtpInput from 'react18-input-otp';
import {VerifyApi} from "../../api/verify-api";
import {VerifyCodeStyles} from "./verify-code.styles";
import {ChangeTitle} from "../../middleware";
import {signFailure, signSuccess} from "../../action/signup-action";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {UserCreateApi} from "../../api/user-create-api";

export default function VerifyCode({phone, type, navigateTo}) {

    ChangeTitle("Verify your phone number")

    const [otp, setOtp] = useState('');

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleChange = (enteredOtp) => {
        setOtp(enteredOtp);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await VerifyApi({phone: "+998" + phone, code: otp, type: type})
            dispatch(signSuccess(response.data))
            // await UserCreateApi({firstName: "user", lastName: "", email: ""})
            navigate(navigateTo)
        } catch (error) {
            dispatch(signFailure(error))
            console.log(error)
        }
    }

    return (
        <>
            <VerifyCodeStyles.Form onSubmit={handleSubmit}>
                <h1>Confirm the SMS code received on your phone number</h1>
                <OtpInput
                    id="otp-input"
                    autoComplete="off"
                    onChange={handleChange}
                    shouldAutoFocus
                    value={otp}
                    separator={<span>-</span>}
                    numInputs={6}
                />
                <button type="submit">Send</button>
            </VerifyCodeStyles.Form>
        </>
    )
}
