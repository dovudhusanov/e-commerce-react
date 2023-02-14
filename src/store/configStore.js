import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "../reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import logger from "redux-logger";

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));