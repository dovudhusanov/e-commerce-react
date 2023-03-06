import React, {useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {AuthStyle} from "../Login/LoginStyle";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {SignupApi} from "../../api/SignupApi";
import {signFailure, signStart, signSuccess} from "../../action/SignupAction";
import {ChangeTitle, ScrollTop} from "../../middleware";
import {VerifyCode} from "../index";

function Signup() {

    ScrollTop()
    ChangeTitle("Sign Up")


    const Schema = Yup.object().shape({
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
        phoneNumber: "",
        password: "",
        confirmPassword: ""
    };

    const [isPhoneNumberSubmitted, setIsPhoneNumberSubmitted] = useState(false);
    const [phoneVerify, setPhoneVerify] = useState("")

    const dispatch = useDispatch()

    const handleSubmit = async (value) => {
        setPhoneVerify(value.phoneNumber)
        dispatch(signStart())
        try {
            const {phoneNumber, password} = value
            const response = await SignupApi({phone: "+998" + phoneNumber, password})
            const {access, refresh} = response.data;
            localStorage.setItem('access', access);
            localStorage.setItem('refresh', refresh);
            setIsPhoneNumberSubmitted(true)
        } catch (error) {
            console.log(error)
            dispatch(signFailure(error.message))
            throw error
            setIsPhoneNumberSubmitted(false)
        }
    }

    function TextError(props) {
        return <AuthStyle.ErrorValid>{props.children}</AuthStyle.ErrorValid>;
    }

    return (
        <>
            {!isPhoneNumberSubmitted && (
                <AuthStyle.AuthContainer>
                    <AuthStyle.AuthForm>
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
                                                type="password"
                                                placeholder="password"
                                                name="password"
                                                id="password"
                                                className={errors.password && touched.password ? 'error-valid' : ''}
                                            />
                                            <ErrorMessage name="password" component={TextError}/>
                                        </AuthStyle.Input>
                                    </AuthStyle.InputParent>
                                    <AuthStyle.InputParent>
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
            )}
            {isPhoneNumberSubmitted && (
                <VerifyCode phone={phoneVerify}/>
            )}
        </>
    );
}

export default Signup;