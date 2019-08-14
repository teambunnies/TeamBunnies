import { combineReducers } from 'redux';
import alert from './alert'
import auth from './auth'
import chicagoname from './chicagoname'


export default combineReducers({
    alert,
    auth,
    chicagoname
    
})