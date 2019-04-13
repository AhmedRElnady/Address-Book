import { combineReducers } from "redux";

import authReducer from "./authReducer";
import contactReducer from "./contactReducer";

import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
    auth: authReducer,
    contacts: contactReducer,
    firebase: firebaseReducer
});

export default rootReducer;


