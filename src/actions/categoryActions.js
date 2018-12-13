import * as types from './actionTypes';
import * as helper from '../helpers/RestHelper';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

const json = require('../components/utils/git-cheat-sheet.json');

export const loadCategoriesSuccess = (categories) => 
    ({ type: types.LOAD_CATEGORIES_SUCCESS, categories});

export const loadCategories = (searchTerm) => (
    dispatch => {
        dispatch(beginAjaxCall());
        let searchResult = searchCategory(json, searchTerm);
        dispatch(loadCategoriesSuccess(searchResult)) 

        let promise = searchTerm ? helper.post("/api/categories", searchTerm) : helper.get("/api/categories");
        promise.then(categories => {
            dispatch(loadCategoriesSuccess(categories)) 
        }).catch(e =>{
            dispatch(ajaxCallError(e));
            throw(e);
        });
    }
);

const searchCategory = (arr, searchTerm) => {
    if(searchTerm){
        let result = [];
        searchTerm = searchTerm.toLowerCase();

        result = arr.filter( item => 
            item.category.toLowerCase().includes(searchTerm)
            | item.cheats.some( cheat => 
                cheat.description.toLowerCase().includes(searchTerm)
                | cheat.command.toLowerCase().includes(searchTerm))
        ).map(item =>
            Object.assign({}, item, {'cheats': item.cheats.filter( cheat => 
                cheat.description.toLowerCase().includes(searchTerm)
                | cheat.command.toLowerCase().includes(searchTerm))
            })
        );

        return result;
    }
    return arr;
}