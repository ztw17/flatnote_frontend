import { combineReducers } from 'redux';
import login from './login';
import notes from './notes';
import tags from './tags';
import users from './users'

export default combineReducers({
    login,
    notes,
    tags,
    users
})