import {combineReducers} from 'redux';
import categories from './categoryReducer';
import users from './userReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    categories,
    users,
    ajaxCallsInProgress,
});

export default rootReducer;