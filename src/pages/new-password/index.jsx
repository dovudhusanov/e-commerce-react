import React, {useState} from 'react';
import {NewPasswordStyle} from "./new-password.styles";
import {Button} from "../../components";
import {AuthStyle} from "../login/login.styles";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {SendResettedApi} from "../../api";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

function NewPassword() {
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

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)


    const handleSubmit = async (values) => {
        try {
            setIsLoading(true)
            const res = await SendResettedApi({phone: "+998" + localStorage.getItem("phone_number"), password: values.password, password2: values.confirmPassword})
            console.log(res)
            navigate("/login")
            localStorage.removeItem("phone_number")
            toast.success('Successfully saved!');
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            toast.error('Please enter a password with a combination of letters and numbers\n!');
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
                            <p>Please enter new password and confirm</p>
                            <AuthStyle.InputParent>
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
                                <AuthStyle.Input>
                                    <Field
                                        type="password"
                                        placeholder="Confirm Password"
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        className={errors.confirmPassword && touched.confirmPassword ? 'error-valid' : ''}
                                    />
                                    <AuthStyle.ErrorValid>
                                        <ErrorMessage name="confirmPassword" component={TextError}/>
                                    </AuthStyle.ErrorValid>
                                </AuthStyle.Input>
                            </AuthStyle.InputParent>
                                <Button type="submit" loading={isLoading && true}>Submit</Button>
                        </Form>
                    )}
                </Formik>
            </NewPasswordStyle>
        </div>
    );
}

export default NewPassword;