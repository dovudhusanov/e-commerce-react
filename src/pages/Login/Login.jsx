import React, {useEffect, useState} from 'react';
import {AuthStyle} from "./LoginStyle"
import "./LoginStyle.css"
import {useDispatch} from "react-redux";
import {loginFailure, loginStart, loginSuccess} from "../../action/AuthLoginAction";
import {LoginApi} from "../../api/LoginApi";
import {Link} from "react-router-dom";
import {ScrollTop} from "../../middleware/scrollTop";
import ChangeTitle from "../../middleware/changeTitle";

function Login() {

    ScrollTop();
    ChangeTitle("Log In")

    const [value, setValue] = useState({
        phoneNumber: "",
        password: ""
    })

    const [showPass, setShowPass] = useState(false)

    const handleChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
    }

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(loginStart());
        try {
            const {phoneNumber, password} = value
            const user = await LoginApi({phone: "+998" + phoneNumber, password})
            dispatch(loginSuccess(user.data))
        } catch (error) {
            console.log(error)
            dispatch(loginFailure())
        }
    }
    return (
        <AuthStyle.AuthContainer>
            <AuthStyle.AuthForm>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <AuthStyle.InputParent>
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <AuthStyle.Input className="phone-number-input">
                            <div>+998</div>
                            <input
                                type="tel"
                                placeholder="00 000-00-00"
                                name="phoneNumber"
                                id="phoneNumber"
                                value={value.phoneNumber}
                                onChange={handleChange}
                                required
                                autoComplete="off"
                            />
                            <AuthStyle.ErrorValid></AuthStyle.ErrorValid>
                        </AuthStyle.Input>
                    </AuthStyle.InputParent>
                    <AuthStyle.InputParent>
                        <label htmlFor="password">Password:</label>
                        <AuthStyle.Input>
                            <input
                                type={showPass ? "text" : "password"}
                                placeholder="password"
                                name="password"
                                id="password"
                                value={value.password}
                                onChange={handleChange}
                                required
                            />
                            <AuthStyle.Eye onClick={() => setShowPass(prevState => !prevState)}>
                                {showPass ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}
                            </AuthStyle.Eye>
                            <AuthStyle.ErrorValid></AuthStyle.ErrorValid>
                        </AuthStyle.Input>
                    </AuthStyle.InputParent>
                    <AuthStyle.Button type="submit">Login</AuthStyle.Button>
                    <AuthStyle.BottomText>Create an account <Link to="/signup">Sign Up</Link></AuthStyle.BottomText>
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

export default Login;