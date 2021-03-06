import * as types from './actionTypes';
import * as helper from '../components/utils/RestHelper';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export const loadUserSuccess = (user) => ({
    type: types.LOAD_USER_SUCCESS, user
});

export const loadUser = (username, password) =>
    dispatch => {
        dispatch(beginAjaxCall());
        return helper.post("api/user", {username, password})
        .then(user => {
            return dispatch(loadUserSuccess(user)) 
        }).catch(e =>{
            dispatch(ajaxCallError(e));
            throw(e);
        });
    }