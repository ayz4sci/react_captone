import * as types from './actionTypes';
import * as helper from '../components/utils/RestHelper';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export const loadUserSuccess = (users) => ({
    type: types.LOAD_USER_SUCCESS, users
});

export const createUserSuccess = (user) => 
    ({ type: types.CREATE_USER_SUCCESS, user});

export const loadUser = (username, password) => ( 
    dispatch => {
        dispatch(beginAjaxCall());
        helper.post("api/user", {username, password})
        .then(user => {
            dispatch(loadUserSuccess(user)) 
        }).catch(e =>{
            dispatch(ajaxCallError(e));
            throw(e);
        });
    }
 );