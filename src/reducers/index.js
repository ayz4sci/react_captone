import {combineReducers} from 'redux';
import categories from './categoryReducer';
import user from './userReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    categories,
    user,
    ajaxCallsInProgress,
});

export default rootReducer;