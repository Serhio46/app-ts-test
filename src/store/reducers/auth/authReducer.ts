import { AuthReducerState, AuthActions, ActionAuthTypes } from './types';

const inintialState: AuthReducerState = {
	isAuth: false,
}

const authReducer = (state = inintialState, action: AuthActions): AuthReducerState => {
	switch (action.type) {
		case ActionAuthTypes.SET_IS_AUTH:
			return { isAuth: true };
		case (ActionAuthTypes.REMOVE_IS_AUTH):
			return { isAuth: false }
		default:
			return state;
	}
}

export default authReducer;