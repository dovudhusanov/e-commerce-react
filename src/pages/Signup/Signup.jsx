import React, {useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {AuthStyle} from "../Login/LoginStyle";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {ScrollTop} from "../../middleware/scrollTop";
import ChangeTitle from "../../middleware/changeTitle";
import {SignupApi} from "../../api/SignupApi";
import {signFailure, signStart, signSuccess} from "../../action/SignupAction";

function Signup() {

    ScrollTop()
    ChangeTitle("Sign Up")

    const Schema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'First name must be at least 2 characters')
            .max(25, 'First name must be at most 25 characters')
            .required('First name is required'),
        email: Yup.string().email('Invalid email'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required'),
        phoneNumber: Yup.string()
            .matches(
                /^\d{9}$/,
                'Must be a phone number in Uzbekistan'
            )
            .required('Required'),
    });

    const initialValues = {
        address: "",
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        password: "",
        confirmPassword: ""
    };

    const dispatch = useDispatch()

    const handleSubmit = async (value) => {
        dispatch(signStart());
        try {
            const {firstName, phoneNumber, email, password,} = value
            const response = await SignupApi({first_name: firstName, phone: "+998" + phoneNumber, email, password})
            const {access_token, refresh_token} = response.data;
            localStorage.setItem('access_token', access_token);
            localStorage.setItem('refresh_token', refresh_token);
            dispatch(signSuccess(response.data))
        } catch (error) {
            console.log(error)
            dispatch(signFailure(error.message))
            throw error
        }
    }

    function TextError(props) {
        return <AuthStyle.ErrorValid>{props.children}</AuthStyle.ErrorValid>;
    }

    return (
        <AuthStyle.AuthContainer>
            <AuthStyle.AuthForm className="auth-form">
                <h1>Sign Up</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={Schema}
                    onSubmit={(values) => {
                        handleSubmit(values)
                    }}
                >
                    {({errors, touched}) => (
                        <Form>
                            <AuthStyle.DoubleInput>
                                <AuthStyle.InputParent className="double-input">
                                    <label htmlFor="firstName">First Name</label>
                                    <AuthStyle.Input>
                                        <Field
                                            type="text"
                                            placeholder="first name"
                                            name="firstName"
                                            id="firstName"
                                            className={errors.firstName && touched.firstName ? 'error-valid' : ''}
                                        />
                                        <ErrorMessage name="firstName" component={TextError}/>
                                        <AuthStyle.ErrorValid></AuthStyle.ErrorValid>
                                    </AuthStyle.Input>
                                </AuthStyle.InputParent>
                                <AuthStyle.InputParent className="double-input">
                                    <label htmlFor="lastName">Last Name</label>
                                    <AuthStyle.Input>
                                        <Field
                                            type="text"
                                            placeholder="last name"
                                            name="lastName"
                                            id="lastName"
                                        />
                                        <AuthStyle.ErrorValid></AuthStyle.ErrorValid>
                                    </AuthStyle.Input>
                                </AuthStyle.InputParent>
                            </AuthStyle.DoubleInput>
                            <AuthStyle.DoubleInput>
                                <AuthStyle.InputParent className="double-input">
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
                            <AuthStyle.InputParent className="double-input">
                                <label htmlFor="email">Email:</label>
                                <AuthStyle.Input className={errors.email && touched.email ? 'error-valid phone-number-input' : 'phone-number-input'}>
                                    <Field
                                        type="email"
                                        placeholder="example@gmail.com"
                                        name="email"
                                        id="email"
                                    />
                                </AuthStyle.Input>
                                <ErrorMessage name="email" component={TextError}/>
                            </AuthStyle.InputParent>
                            </AuthStyle.DoubleInput>
                            <AuthStyle.DoubleInput>
                                <AuthStyle.InputParent className="double-input">
                                    <label htmlFor="password">Password:</label>
                                    <AuthStyle.Input>
                                        <Field
                                            type="password"
                                            placeholder="password"
                                            name="password"
                                            id="password"
                                            className={errors.password && touched.password ? 'error-valid' : ''}
                                        />
                                        <ErrorMessage name="password" component={TextError}/>
                                    </AuthStyle.Input>
                                </AuthStyle.InputParent>
                                <AuthStyle.InputParent className="double-input">
                                    <label htmlFor="confirmPassword">Confirm Password:</label>
                                    <AuthStyle.Input>
                                        <Field
                                            type="password"
                                            placeholder="Confirm Password"
                                            name="confirmPassword"
                                            id="confirmPassword"
                                            className={errors.confirmPassword && touched.confirmPassword ? 'error-valid' : ''}
                                        />
                                        <ErrorMessage name="confirmPassword" component={TextError}/>
                                        <AuthStyle.ErrorValid></AuthStyle.ErrorValid>
                                    </AuthStyle.Input>
                                </AuthStyle.InputParent>
                            </AuthStyle.DoubleInput>
                            <AuthStyle.Button type="submit">Sign Up</AuthStyle.Button>
                            <AuthStyle.BottomText>Already have an account? <Link to="/login">Log
                                In</Link></AuthStyle.BottomText>
                            {/*<AuthStyle.Or>*/}
                            {/*    <AuthStyle.OrLine></AuthStyle.OrLine>*/}
                            {/*    <AuthStyle.OrText>Or</AuthStyle.OrText>*/}
                            {/*    <AuthStyle.OrLine></AuthStyle.OrLine>*/}
                            {/*</AuthStyle.Or>*/}
                            {/*<AuthStyle.Button className="button-google"><img src="./assets/google.png" alt="google img"/> Login with Google</AuthStyle.Button>*/}
                        </Form>
                    )}
                </Formik>
            </AuthStyle.AuthForm>
            {/*<AuthStyle.ForgotPass>Forgot Password?</AuthStyle.ForgotPass>*/}
        </AuthStyle.AuthContainer>
    );
}

export default Signup;