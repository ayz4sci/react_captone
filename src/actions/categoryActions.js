import * as types from './actionTypes';
import * as helper from '../components/utils/RestHelper';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export const loadCategoriesSuccess = (categories) => 
    ({ type: types.LOAD_CATEGORIES_SUCCESS, categories});

export const loadCategories = (searchTerm) => (
    dispatch => {
        dispatch(beginAjaxCall());
        helper.get("/api/categories")
        .then(categories => {
            dispatch(loadCategoriesSuccess(categories)) 
        }).catch(e =>{
            dispatch(ajaxCallError(e));
            throw(e);
        });
    }
);