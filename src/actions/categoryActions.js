import * as types from './actionTypes';
import * as helper from '../helpers/RestHelper';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

const json = require('../components/utils/git-cheat-sheet.json');

export const loadCategoriesSuccess = (categories) => 
    ({ type: types.LOAD_CATEGORIES_SUCCESS, categories});

export const loadCategories = (searchTerm) => (
    dispatch => {
        // dispatch(beginAjaxCall());
        // dispatch(loadCategoriesSuccess(json));

        helper.get("/api/categories")
        .then(categories => {
            dispatch(loadCategoriesSuccess(categories)) 
        }).catch(e =>{
            dispatch(ajaxCallError(e));
            throw(e);
        });
    }
);