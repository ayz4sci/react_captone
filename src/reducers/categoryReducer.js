import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function categoryReducer (state = initialState.categories, action){
    let result = [];
    switch (action.type) {
        case types.LOAD_CATEGORIES_SUCCESS:
            result = action.categories;
            break;

        default:
            result =  state;
    }
    return sort(result);
}

export const sort = (categories) => {
    categories.sort((a, b) =>{
        const x = a.category.toLowerCase();
        const y = b.category.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });
    return categories;
}
