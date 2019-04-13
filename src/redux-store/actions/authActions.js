import { auth, googleProvider} from "../../config/fbConfig";


export function googleLogin() {
    return dispatch => auth.signInWithPopup(googleProvider);
}

// use react-redux-firebase package instead 

// export function getUser() {
//     return dispatch => {
//         auth.onAuthStateChanged(user => {
//             dispatch({
//                 type: GET_USER,
//                 payload: user /// the user that is already loggined in
//             })
//         })
//     }
// }

export function signOut() {
    // custom arguments see: 
    // https://www.npmjs.com/package/redux-thunk#injecting-a-custom-argument
    
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut()
            .then(()=> {
                console.log("%%%%%%% user logout %%%%");
                dispatch({ type: 'SIGNOUT_SUCCESS' })
            });
    }
}