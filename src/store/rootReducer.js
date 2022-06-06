import { combineReducers} from '@reduxjs/toolkit'
import authReducer from '../reducers/AuthRecuer'
export const rootReducer = combineReducers({
   
    authReducer: authReducer
    
});
export default rootReducer;
