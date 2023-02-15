import React, {useState} from 'react';
import OtpInput from 'react18-input-otp';
import {VerifyApi} from "../../api/VerifyApi";
import {VerifyCodeStyle} from "./VerifyCodeStyle";

export default function VerifyCode() {
    const [otp, setOtp] = useState('');

    const handleChange = (enteredOtp) => {
        setOtp(enteredOtp);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const verifyCode = await VerifyApi(otp)
            console.log(verifyCode)
        } catch (e) {
            console.log(e)
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
                />
                <button type="submit">Send</button>
            </VerifyCodeStyle.Form>
        </>
    )
}