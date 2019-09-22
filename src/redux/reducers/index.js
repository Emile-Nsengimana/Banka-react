import { combineReducers } from 'redux';
import { authReducer } from './authenticationReducer';
import { accountReducer } from './accountsReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  accounts: accountReducer,
});
export default rootReducer;
