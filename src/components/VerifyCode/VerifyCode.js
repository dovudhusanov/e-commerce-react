import React, {useState} from 'react';
import OtpInput from 'react18-input-otp';
import {VerifyApi} from "../../api/VerifyApi";

export default function OTPInput() {
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
            <form onSubmit={handleSubmit}>
                <OtpInput
                    id="otp-input"
                    autoComplete="one-time-code"
                    inputStyle="inputStyle"
                    onChange={handleChange}
                    shouldAutoFocus
                    value={otp}
                    separator={<span>-</span>}
                />
            </form>
        </>
    )
}