import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/configStore";
import GlobalStyles from "./global.styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <GlobalStyles />
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);