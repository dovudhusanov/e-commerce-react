import React, {useState} from 'react';
import {Buttons, ResetPasswordStyles} from "./reset-password.styles";
import {Button} from "../../components";
import {Link, useNavigate} from "react-router-dom";
import {ResetPasswordApi} from "../../api/auth/reset-password-api";
import {VerifyCode} from "../index";
import {AuthStyle} from "../login/login.styles";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

function ResetPassword() {

    const [phoneVerify, setPhoneVerify] = useState()

    const [navigate, setNavigate] = useState(false)

    const Schema = Yup.object().shape({
        phoneNumber: Yup.string()
            .matches(
                /^\d{9}$/,
                'Must be a phone number in Uzbekistan'
            )
            .required('Required'),
    });

    const initialValues = {
        phoneNumber: "",
    };

    const handleSubmit = async (values) => {
        setPhoneVerify(values.phoneNumber)
        try {
            const res = await ResetPasswordApi({phone: "+998" + values.phoneNumber})
            setNavigate(true)
            console.log(res)
        } catch (error) {
            setNavigate(false)
            console.log(error)
        }
    }

    function TextError(props) {
        return <AuthStyle.ErrorValid>{props.children}</AuthStyle.ErrorValid>;
    }

    return (
        <div className="container">
            {navigate
                ? <VerifyCode phone={phoneVerify} type={"password_reset"} navigateTo={"/new-password"}/>
                : (
                    <ResetPasswordStyles>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={Schema}
                            onSubmit={(values) => {
                                handleSubmit(values)
                            }}
                        >
                            {({errors, touched}) => (
                                <Form>
                                    <h1>Forgot Password?</h1>
                                    <p>Enter your phone number to reset password</p>
                                    <AuthStyle.InputParent>
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
                                    <Buttons>
                                        <Button type="submit">Reset password</Button>
                                        <Link to={"/login"}><Button type="button" className="btn-cancel">Cancel</Button></Link>
                                    </Buttons>
                                </Form>
                            )}
                        </Formik>
                    </ResetPasswordStyles>
                )
            }
        </div>
    );
}

export default ResetPassword;