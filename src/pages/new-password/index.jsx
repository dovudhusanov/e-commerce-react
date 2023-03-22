import React, {useState} from 'react';
import {NewPasswordStyle} from "./new-password.styles";
import {Button} from "../../components";
import {AuthStyle} from "../login/login.styles";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {SendResettedApi} from "../../api/send-resetted-api";

function NewPassword() {
    const [navigate, setNavigate] = useState(false)

    const Schema = Yup.object().shape({
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required'),
    });

    const initialValues = {
        password: "",
        confirmPassword: ""
    };

    const handleSubmit = async (value) => {
        try {
            const res = await SendResettedApi({phone: "+998999999999", password: value.password, password2: value.confirmPassword})
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    function TextError(props) {
        return <AuthStyle.ErrorValid>{props.children}</AuthStyle.ErrorValid>;
    }

    return (
        <div className="container">

            <NewPasswordStyle>
                <Formik
                    initialValues={initialValues}
                    validationSchema={Schema}
                    onSubmit={(values) => {
                        handleSubmit(values)
                    }}
                >
                    {({errors, touched}) => (
                        <Form>
                            <h1>New Password</h1>
                            <p>Enter new password</p>
                            <AuthStyle.InputParent>
                                <label htmlFor="password">New Password:</label>
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
                            <div>
                                <Button type="submit">Submit</Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </NewPasswordStyle>
        </div>
    );
}

export default NewPassword;