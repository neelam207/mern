import { AUTH_SUCESS, USERS, USERS_ERROR } from "../actions/AuthAction";

const initialState = {
    data: {},
    users: {},
    error: {}
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SUCESS :
            return {
            ...state,
            data: action.payload
        }
        case USERS :
            return {
            ...state,
            users: action.payload
        }
        case USERS_ERROR :
            return {
            ...state,
            error: action.payload
        }
        default:
             return state;
    }
}
export default authReducer;