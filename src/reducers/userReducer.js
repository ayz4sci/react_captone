import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer (state = initialState.users, action){
    let result = [];
    switch (action.type) {
        case types.LOAD_USERS_SUCCESS:
            result = action.users;
            break;

        case types.CREATE_USER_SUCCESS:
            result= [
                ...state,
                Object.assign({}, action.user)
            ];
            break;

        default:
            result =  state;
    }
    return result;
}
