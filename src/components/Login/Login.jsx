import React, {useState} from 'react';
import {AuthStyle} from "./LoginStyle"
import {useDispatch} from "react-redux";
import {loginFailure, loginStart, loginSuccess} from "../../action/AuthLoginAction";
import {LoginApi} from "../../api/LoginApi";

function Login() {

    const [value, setValue] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
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
            <AuthStyle.AuthForm>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <AuthStyle.InputParent>
                        <label>Email:</label>
                        <AuthStyle.Input>
                            <input
                                type="email"
                                placeholder="email@example.com"
                                name="email"
                                value={value.email}
                                onChange={handleChange}
                                required
                            />
                            <AuthStyle.ErrorValid></AuthStyle.ErrorValid>
                        </AuthStyle.Input>
                    </AuthStyle.InputParent>
                    <AuthStyle.InputParent>
                        <label>Password:</label>
                        <AuthStyle.Input>
                            <input
                                type="password"
                                placeholder="password"
                                name="password"
                                value={value.password}
                                onChange={handleChange}
                                required
                            />
                            <AuthStyle.ErrorValid></AuthStyle.ErrorValid>
                        </AuthStyle.Input>
                    </AuthStyle.InputParent>
                </form>
            </AuthStyle.AuthForm>
        </AuthStyle.AuthContainer>
    );
}

export default Login;