import { combineReducers } from 'redux';
import FormReducer from './formReducer';
import ListReducer from './listReducer';

export default combineReducers({
    formState: FormReducer,
    listState: ListReducer
});