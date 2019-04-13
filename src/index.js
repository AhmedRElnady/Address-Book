// import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";

import rootReducer  from "./redux-store/reducers";
import fbConfig from "./config/fbConfig";


/// create redux store require => reducer  require => actions

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase})),
        reactReduxFirebase(fbConfig, {userProfile: 'users', attachAuthIsReady: true})
    )
);


/// provide the store to react 

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
    // registerServiceWorker();
    serviceWorker.unregister();
});

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
//  //  addressbook-c1971 