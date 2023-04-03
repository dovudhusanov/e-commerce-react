import React, {useState} from 'react';
import {Button} from "../../../../components";
import img from "../../../../assets/change-phone.png"
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {ChangePasswordStyles, ErrorValid} from "../change-password/change-password.styles";
import {VerifyCode} from "../../../index";
import {ChangePhoneNumberApi} from "../../../../api";

function ChangePhoneNumber() {

    const [navigate, setNavigate] = useState(false)
    const [newPhone, setNewPhone] = useState()

    const navigator = useNavigate()

    const Schema = Yup.object().shape({
        oldPhone: Yup.string()
            .matches(
                /^\+\d{12}$/,
                'Must be a phone number in Uzbekistan'
            )
            .required('Required'),
        newPhone: Yup.string()
            .matches(
                /^\+\d{12}$/,
                'Must be a phone number in Uzbekistan'
            )
            .required('Required'),
    });

    const initialValues = {
        oldPhone: localStorage.getItem("oldPhone"),
        newPhone: "+998",
    };

    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (values) => {
        setNewPhone(values.newPhone)
        try {
            setIsLoading(true)
            await ChangePhoneNumberApi({phone: values.oldPhone, new_phone: values.newPhone})
            setNavigate(true)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            toast.error('old phone is wrong');
            setNavigate(false)
            console.log(error.message)
        }
    }

    function TextError(props) {
        return <ErrorValid>{props.children}</ErrorValid>;
    }

    return (
        <div className="container">
            {navigate ? (
                <VerifyCode newPhone={newPhone} phone={localStorage.getItem("oldPhone")} type={"change_phone"} navigateTo={"/user/info"} toast/>
            ) : (
                <ChangePasswordStyles>
                    <img src={img} alt="change phone" width={300}/>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={Schema}
                        onSubmit={(values) => {
                            handleSubmit(values)
                        }}
                    >
                        {({errors, touched}) => (
                            <Form>
                                <h1>Change phone number</h1>
                                <li>
                                    <Field
                                        className={errors.oldPhone && touched.oldPhone && 'error-valid'}
                                        type="tel"
                                        name={"oldPhone"}
                                        id={"oldPhone"}
                                        placeholder="Old phone number"
                                    />
                                    <ErrorMessage name="oldPhone" component={TextError}/>
                                </li>
                                <li>
                                    <Field
                                        className={errors.newPhone && touched.newPhone && 'error-valid'}
                                        type="tel"
                                        name={"newPhone"}
                                        id={"newPhone"}
                                        placeholder="New phone number"
                                    />
                                    <ErrorMessage name="newPhone" component={TextError}/>
                                </li>
                                <div>
                                    <Button type={"submit"}>submit</Button>
                                    <Link onClick={() => {
                                        navigator(-1)
                                        localStorage.removeItem("oldPhone")
                                    }}>
                                        <Button type={"button"} loading={isLoading && true} className="btn-cancel">
                                            cancel
                                        </Button>
                                    </Link>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </ChangePasswordStyles>
            )}
        </div>
    );
}

export default ChangePhoneNumber;