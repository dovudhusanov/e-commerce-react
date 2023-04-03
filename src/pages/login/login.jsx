import React, {useState} from 'react';
import {AuthStyle} from "./login.styles"
import "./login-style.css"
import {LoginUser} from "../../action/auth-login-action";
import {Link, useNavigate} from "react-router-dom";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {ChangeTitle, ScrollTop} from "../../middleware";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";

function Login() {

    ScrollTop();
    ChangeTitle("Log In")

    const Schema = Yup.object().shape({
        phoneNumber: Yup.string()
            .matches(
                /^\d{9}$/,
                'Must be a phone number in Uzbekistan'
            )
            .required('Required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Required')
    });

    const initialValues = {
        phoneNumber: "",
        password: "",
    };

    const [showPass, setShowPass] = useState(false)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleSubmit = (values) => {
        const {phoneNumber, password} = values
        dispatch(LoginUser(phoneNumber, password))
    }

    function TextError(props) {
        return <AuthStyle.ErrorValid>{props.children}</AuthStyle.ErrorValid>;
    }

    return (
        <AuthStyle.AuthContainer>
            <AuthStyle.AuthForm>
                <h1>Login</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={Schema}
                    onSubmit={(values) => {
                        handleSubmit(values)
                    }}
                >
                    {({errors, touched}) => (
                        <Form>
                            <AuthStyle.InputParent>
                                <label htmlFor="phoneNumber">Phone Number:</label>
                                <AuthStyle.Input
                                    className={errors.phoneNumber && touched.phoneNumber ? 'error-valid phone-number-input' : 'phone-number-input'}>
                                    <div>+998</div>
                                    <Field
                                        type="tel"
                                        placeholder="00 000-00-00"
                                        name="phoneNumber"
                                        id="phoneNumber"
                                        autoComplete="off"
                                    />
                                </AuthStyle.Input>
                                <ErrorMessage name="phoneNumber" component={TextError}/>
                            </AuthStyle.InputParent>
                            <AuthStyle.InputParent>
                                <label htmlFor="password">Password:</label>
                                <AuthStyle.Input>
                                    <Field
                                        type={showPass ? "text" : "password"}
                                        placeholder="password"
                                        name="password"
                                        id="password"
                                        className={errors.password && touched.password ? 'error-valid' : ''}
                                    />
                                    <AuthStyle.Eye onClick={() => setShowPass(prevState => !prevState)}>
                                        {showPass ? <i className="fa-solid fa-eye"></i> :
                                            <i className="fa-solid fa-eye-slash"></i>}
                                    </AuthStyle.Eye>
                                    <ErrorMessage name="password" component={TextError}/>
                                </AuthStyle.Input>
                            </AuthStyle.InputParent>
                            <AuthStyle.Reset><Link to="/reset-password">Reset password?</Link></AuthStyle.Reset>
                            <AuthStyle.Button type="submit">Login</AuthStyle.Button>
                            <AuthStyle.BottomText>Create an account <Link to="/signup">Sign
                                Up</Link></AuthStyle.BottomText>
                            {/*<AuthStyle.Or>*/}
                            {/*    <AuthStyle.OrLine></AuthStyle.OrLine>*/}
                            {/*    <AuthStyle.OrText>Or</AuthStyle.OrText>*/}
                            {/*    <AuthStyle.OrLine></AuthStyle.OrLine>*/}
                            {/*</AuthStyle.Or>*/}
                            {/*<AuthStyle.button className="button-google"><img src="./assets/google.png" alt="google img"/> login with Google</AuthStyle.button>*/}
                        </Form>
                    )}
                </Formik>
            </AuthStyle.AuthForm>
            {/*<AuthStyle.ForgotPass>Forgot Password?</AuthStyle.ForgotPass>*/}
        </AuthStyle.AuthContainer>
    );
}

export default Login;