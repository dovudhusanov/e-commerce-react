import React, {useState} from 'react';
import {ChangePasswordStyles, ErrorValid} from "./change-password.styles"
import {Button} from "../../../../components";
import {ChangePasswordApi} from "../../../../api/change-password-api";
import img from "../../../../assets/change-password.png"
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

function ChangePassword() {

    const Schema = Yup.object().shape({
        oldPassword: Yup.string()
            .required("Required"),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .matches(/^(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Password must contain a combination of letters and numbers")
            .required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required'),
    });

    const initialValues = {
        oldPassword: "",
        password: "",
        confirmPassword: ""
    };
    const navigate = useNavigate()

    const handleSubmit = async (values) => {
        try {
            await ChangePasswordApi({old_password: values.oldPassword, new_password: values.password})
            toast.success('Password successfully changed!');
            navigate(-1)
        } catch (error) {
            toast.error('old password is wrong');
            console.log(error.message)
        }
    }

    function TextError(props) {
        return <ErrorValid>{props.children}</ErrorValid>;
    }

    return (
        <div className="container">
            <ChangePasswordStyles>
                <img src={img} alt="change password"/>
                <Formik
                    initialValues={initialValues}
                    validationSchema={Schema}
                    onSubmit={(values) => {
                        handleSubmit(values)
                    }}
                >
                    {({errors, touched}) => (
                        <Form>
                            <h1>Change Password</h1>
                           <li>
                               <Field
                                   className={errors.oldPassword && touched.oldPassword && 'error-valid'}
                                   type="text"
                                   name={"oldPassword"}
                                   id={"oldPassword"}
                                   placeholder="Old Password"
                               />
                               <ErrorMessage name="oldPassword" component={TextError}/>
                           </li>
                           <li>
                               <Field
                                   className={errors.password && touched.password && 'error-valid'}
                                   type="text"
                                   name={"password"}
                                   id={"password"}
                                   placeholder="New Password"
                               />
                               <ErrorMessage name="password" component={TextError}/>
                           </li>
                           <li>
                               <Field
                                   className={errors.confirmPassword && touched.confirmPassword && 'error-valid'}
                                   type="text"
                                   name={"confirmPassword"}
                                   id={"confirmPassword"}
                                   placeholder="Confirm password"
                               />
                               <ErrorMessage name="confirmPassword" component={TextError}/>
                           </li>
                            <div>
                                <Button type={"submit"}>submit</Button>
                                <Link to="/user/settings">
                                    <Button type={"button"} className="btn-cancel">
                                        cancel
                                    </Button>
                                </Link>
                            </div>
                        </Form>
                    )}
                </Formik>
            </ChangePasswordStyles>
        </div>
    );
}

export default ChangePassword;