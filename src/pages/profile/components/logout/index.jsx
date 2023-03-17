// import React from 'react';
// import {useDispatch} from "react-redux";
// import {useNavigate} from "react-router-dom";
// import {LogoutApi} from "../../../../api/logout-api";
// import {logout} from "../../../../action/auth-login-action";
// import {Button} from "../../../../components";
//
// function LogoutBtn() {
//
//     const dispatch = useDispatch()
//     const navigate = useNavigate()
//
//     const refresh = localStorage.getItem("refresh")
//
//     async function handleLogout() {
//         const accessToken = localStorage.getItem("access");
//         console.log(accessToken)
//         const headers = {Authorization: `Bearer ${accessToken}`};
//         const res = await LogoutApi({refresh: refresh, headers: headers});
//         console.log(res);
//         localStorage.removeItem("access");
//         localStorage.removeItem("refresh");
//         dispatch(logout());
//         navigate("/");
//     }
//
//     return (
//         <Button onClick={handleLogout}>Log out</Button>
//     );
// }
//
// export default LogoutBtn;