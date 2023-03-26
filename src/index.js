import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/configStore";
import GlobalStyles from "./global.styles";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "nprogress/nprogress.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <GlobalStyles />
                <App/>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);