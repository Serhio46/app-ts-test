import { IUser } from '../../../models/IUser';
import { AuthReducerState, AuthActions, ActionAuthTypes } from './types';

const inintialState: AuthReducerState = {
	isAuth: false,
	error: '',
	isLoading: false,
	user: {} as IUser,
}

const authReducer = (state = inintialState, action: AuthActions): AuthReducerState => {
	switch (action.type) {
		case ActionAuthTypes.SET_IS_AUTH:
			return {
				...state,
				isAuth: action.payload,
				isLoading: false
			};
		case (ActionAuthTypes.SET_ERROR):
			return {
				...state,
				error: action.payload,
				isLoading: false,
			};
		case (ActionAuthTypes.SET_ISLOADING):
			return {
				...state,
				isLoading: action.payload,
			}
		case (ActionAuthTypes.SET_USER):
			return {
				...state,
				user: action.payload,
			}
		default:
			return state;
	}
}

export default authReducer;