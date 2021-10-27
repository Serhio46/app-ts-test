import axios from 'axios';
import { AppDispatch } from '../..';
import { IUser } from '../../../models/IUser';
import { SetUserAction, ActionAuthTypes, SetIsAuthAction, SetErrorAction, SetIsLoadingAction } from './types';

export const AuthActionCreators = {
	setUser: (user: IUser): SetUserAction => ({ type: ActionAuthTypes.SET_USER, payload: user }),
	setIsAuth: (auth: boolean): SetIsAuthAction => ({ type: ActionAuthTypes.SET_IS_AUTH, payload: auth }),
	setError: (error: string): SetErrorAction => ({ type: ActionAuthTypes.SET_ERROR, payload: error }),
	setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({ type: ActionAuthTypes.SET_ISLOADING, payload: isLoading }),
	logIn: (username: string, password: string) => async (dispatch: AppDispatch) => {
		try {
			dispatch(AuthActionCreators.setIsLoading(true));
			const response = await axios.get<IUser[]>('./users.json');
			const mockUser = response.data.find(user => user.password === password && user.username === username);
			if (mockUser) {
				localStorage.setItem('auth', 'true');
				localStorage.setItem('username', mockUser.username);
				dispatch(AuthActionCreators.setIsAuth(true));
				dispatch(AuthActionCreators.setUser(mockUser));
			} else {
				dispatch(AuthActionCreators.setError('Wrong login or password'))
			}
		} catch (e) {
			dispatch(AuthActionCreators.setError('Error'));
		}
		dispatch(AuthActionCreators.setIsLoading(false));
	},
	logOut: () => async (dispatch: AppDispatch) => {
		try {
			localStorage.removeItem('auth');
			localStorage.removeItem('username');
			dispatch(AuthActionCreators.setUser({} as IUser));
			dispatch(AuthActionCreators.setIsAuth(false));
		} catch (e) {
			dispatch(AuthActionCreators.setError('Error'));
		}
	},
}

