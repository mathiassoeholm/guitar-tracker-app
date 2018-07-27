import { combineReducers } from 'redux';
import auth from '../modules/auth/reducer';
import ui from '../modules/ui/reducer';
import backend from '../modules/backend/reducer';

const rootReducer = combineReducers({ auth, ui, backend });

export default rootReducer;
