import { combineReducers } from 'redux';
import auth from '../modules/auth/reducer';
import ui from '../modules/ui/reducer';

const rootReducer = combineReducers({ auth, ui });

export default rootReducer;
