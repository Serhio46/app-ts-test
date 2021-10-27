import { combineReducers } from "redux";
import authReducer from './auth/authReducer';
import eventReducer from './event/eventReducer';

const rootReducer = combineReducers({
	authReducer,
	eventReducer,
})

export default rootReducer;