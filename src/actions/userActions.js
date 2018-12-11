import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export const loadUserSuccess = (users) => ({
    type: types.LOAD_USERS_SUCCESS, users
});

export const createUserSuccess = (user) => 
    ({ type: types.CREATE_USER_SUCCESS, user});

export const loadUser = () => ( 
    dispatch => {
        dispatch(beginAjaxCall());
        // userApi.getAllUsers().then(users => {
        //     dispatch(loadUserSuccess(users));
        // }).catch(error => {
        //     throw(error);
        // });
    }
 );

 export const saveUser = (user) => (
     dispatch => {
        dispatch(beginAjaxCall());
        // userApi.saveUser(user).then(user => {
        //     dispatch(createUserSuccess(user));
        // }).catch(error => {
        //     dispatch(ajaxCallError(error));
        //     throw(error);
        // });
     }
 );