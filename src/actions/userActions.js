import * as types from './actionTypes';
import * as helper from '../helpers/RestHelper';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export const loadUserSuccess = (users) => ({
    type: types.LOAD_USER_SUCCESS, users
});

export const createUserSuccess = (user) => 
    ({ type: types.CREATE_USER_SUCCESS, user});

export const loadUser = (username, password) => ( 
    dispatch => {
        // userApi.getAllUsers().then(users => {
        //     dispatch(loadUserSuccess(users));
        // }).catch(error => {
        //     throw(error);
        // });

        dispatch(beginAjaxCall());
        helper.post("api/users", {username, password})
        .then(categories => {
            dispatch(loadUserSuccess(categories)) 
        }).catch(e =>{
            dispatch(ajaxCallError(e));
            throw(e);
        });
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