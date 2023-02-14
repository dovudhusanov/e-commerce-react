import React, {useState} from "react";
import {LoginApi} from "./api/LoginApi";
import {useDispatch} from "react-redux";
import {loginFailure, loginStart, loginSuccess} from "./action/AuthLoginAction";

function App() {

    const [value, setValue] = useState("")

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
        <>

        </>
    );
}

export default App;