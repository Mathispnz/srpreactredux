import { combineReducers } from 'redux';
import jewelReducer from './jewelReducer';

export default combineReducers({
    jewel: jewelReducer
});