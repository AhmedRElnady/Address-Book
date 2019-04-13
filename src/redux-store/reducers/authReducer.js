import { GET_USER } from "../actions/actionTypes";
const initState = {};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_USER:
            return action.payload;

        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state;
        
        default:
            return state;
    }
}

export default authReducer;