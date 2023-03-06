import React, {useState} from 'react';
import OtpInput from 'react18-input-otp';
import {VerifyApi} from "../../api/VerifyApi";
import {VerifyCodeStyle} from "./VerifyCodeStyle";
import {ChangeTitle} from "../../middleware";
import {signFailure, signSuccess} from "../../action/SignupAction";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

export default function VerifyCode({phone}) {

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
            const response = await VerifyApi({phone: "+998" + phone, code: otp})
            dispatch(signSuccess(response.data))
            const {access, refresh} = response.data;
            localStorage.setItem('access', access);
            localStorage.setItem('refresh', refresh);
        } catch (error) {
            dispatch(signFailure(error))
            console.log(error)
        }
    }

    return (
        <>
            <VerifyCodeStyle.Form onSubmit={handleSubmit}>
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
            </VerifyCodeStyle.Form>
        </>
    )
}
