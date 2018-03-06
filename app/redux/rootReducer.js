import { combineReducers } from 'redux';

import authReducer from "../modules/auth"
import homeReducer from "../modules/home"

const rootReducer = combineReducers({ authReducer, homeReducer });

export default rootReducer;