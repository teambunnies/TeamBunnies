import { combineReducers } from 'redux';
import alert from './alert'
import auth from './auth'
import chicagoName from './chicagoName'

export default combineReducers({
    alert,
    auth,
    chicagoName
})