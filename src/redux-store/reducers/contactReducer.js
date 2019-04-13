import { GET_CONTACTS } from "../actions/actionTypes";

const initState = {
    // contacts: [
    //     {id: 1, firstName: 'ahmed', lastName: 'elnady', address: 'mansoura'},
    //     {id: 2, firstName: 'ahmed22', lastName: 'elnady22', address: 'mansoura 22'},
    //     {id: 3, firstName: 'ahmed33', lastName: 'elnady33', address: 'mansoura 33'},
    // ]
};

const contactReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_CONTACTS:
            return action.payload;
        default:
            return state;
    }
    
}

export default contactReducer;