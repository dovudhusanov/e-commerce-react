import React, {useEffect, useState} from 'react';
import {AuthStyle} from "../Login/LoginStyle";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loginFailure, loginStart, loginSuccess} from "../../action/AuthLoginAction";
import {LoginApi} from "../../api/LoginApi";

function Signup() {

    const [value, setValue] = useState({
        firstName: "",
        lastName: "",
        username: "",
        phoneNumber: "",
        email: "",
        isSeller: false,
        password: "",
        confirmPassword: "",
    })

    useEffect(() => {
        phoneNumberFormatter()
        handleFormat()
    }, [value])

    const handleChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
    }

    const handleFormat = (value) => {
        if(!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length
        if(phoneNumberLength < 4) return phoneNumber
        if(phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0,2)}) ${phoneNumber.slice(2)}`;
        }
        return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 5)}-${phoneNumber.slice(5, 7)}-${phoneNumber.slice(7, 9)}`
    }

    const phoneNumberFormatter = () => {
        const formattedInput = handleFormat(value.phoneNumber)
        console.log(formattedInput)
        value.phoneNumber = formattedInput
    }

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(loginStart());
        try {
            const user = await LoginApi(value)
            dispatch(loginSuccess(user.data))
        } catch (error) {
            console.log(error)
            dispatch(loginFailure())
        }
    }

    return (
        <AuthStyle.AuthContainer>
            <AuthStyle.AuthForm className="auth-form">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <AuthStyle.DoubleInput>
                        <AuthStyle.InputParent className="double-input">
                            <label htmlFor="firstName">First Name</label>
                            <AuthStyle.Input>
                                <input
                                    type="text"
                                    placeholder="first name"
                                    name="firstName"
                                    id="firstName"
                                    value={value.firstName}
                                    onChange={handleChange}
                                    required
                                />
                                <AuthStyle.ErrorValid></AuthStyle.ErrorValid>
                            </AuthStyle.Input>
                        </AuthStyle.InputParent>
                        <AuthStyle.InputParent className="double-input">
                            <label htmlFor="lastName">Last Name</label>
                            <AuthStyle.Input>
                                <input
                                    type="text"
                                    placeholder="last name"
                                    name="lastName"
                                    id="lastName"
                                    value={value.lastName}
                                    onChange={handleChange}
                                />
                                <AuthStyle.ErrorValid></AuthStyle.ErrorValid>
                            </AuthStyle.Input>
                        </AuthStyle.InputParent>
                    </AuthStyle.DoubleInput>
                    <AuthStyle.DoubleInput>
                        <AuthStyle.InputParent className="double-input">
                            <label htmlFor="username">Username</label>
                            <AuthStyle.Input>
                                <input
                                    type="text"
                                    placeholder="username"
                                    name="username"
                                    id="username"
                                    value={value.username}
                                    onChange={handleChange}
                                    required
                                />
                                <AuthStyle.ErrorValid></AuthStyle.ErrorValid>
                            </AuthStyle.Input>
                        </AuthStyle.InputParent>
                        <AuthStyle.InputParent className="double-input">
                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <AuthStyle.Input className="phone-number-input">
                                <div>+998</div>
                                <input
                                    type="tel"
                                    placeholder="00 000-00-00"
                                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    value={value.phoneNumber}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    required
                                    onKeyDown={phoneNumberFormatter}
                                />
                                <AuthStyle.ErrorValid></AuthStyle.ErrorValid>
                            </AuthStyle.Input>
                        </AuthStyle.InputParent>
                    </AuthStyle.DoubleInput>
                    <AuthStyle.InputParent>
                        <label htmlFor="email">Email:</label>
                        <AuthStyle.Input>
                            <input
                                type="email"
                                placeholder="example@gmail.com"
                                name="email"
                                id="email"
                                value={value.email}
                                onChange={handleChange}
                                required
                            />
                            <AuthStyle.ErrorValid></AuthStyle.ErrorValid>
                        </AuthStyle.Input>
                    </AuthStyle.InputParent>
                    <AuthStyle.DoubleInput>
                        <AuthStyle.InputParent className="double-input">
                            <label htmlFor="password">Password:</label>
                            <AuthStyle.Input>
                                <input
                                    type="password"
                                    placeholder="password"
                                    name="password"
                                    id="password"
                                    value={value.password}
                                    onChange={handleChange}
                                    required
                                />
                                <AuthStyle.ErrorValid></AuthStyle.ErrorValid>
                            </AuthStyle.Input>
                        </AuthStyle.InputParent>
                        <AuthStyle.InputParent className="double-input">
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <AuthStyle.Input>
                                <input
                                    type="password"
                                    placeholder="confirmPassword"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    value={value.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                                <AuthStyle.ErrorValid></AuthStyle.ErrorValid>
                            </AuthStyle.Input>
                        </AuthStyle.InputParent>
                    </AuthStyle.DoubleInput>
                    <AuthStyle.Button type="submit">Login</AuthStyle.Button>
                    <AuthStyle.BottomText>Create an account <Link to="/login">Sign Up</Link></AuthStyle.BottomText>
                    {/*<AuthStyle.Or>*/}
                    {/*    <AuthStyle.OrLine></AuthStyle.OrLine>*/}
                    {/*    <AuthStyle.OrText>Or</AuthStyle.OrText>*/}
                    {/*    <AuthStyle.OrLine></AuthStyle.OrLine>*/}
                    {/*</AuthStyle.Or>*/}
                    {/*<AuthStyle.Button className="button-google"><img src="./assets/google.png" alt="google img"/> Login with Google</AuthStyle.Button>*/}
                </form>
            </AuthStyle.AuthForm>
            {/*<AuthStyle.ForgotPass>Forgot Password?</AuthStyle.ForgotPass>*/}
        </AuthStyle.AuthContainer>
    );
}

export default Signup;