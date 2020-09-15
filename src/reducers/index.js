import { combineReducers } from 'redux';
import auth from './auth';
import exam from './exam';

export default combineReducers({
    auth,
    exam,
});