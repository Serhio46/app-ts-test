import { IUser } from "../../../models/IUser";

export interface AuthReducerState {
	isAuth: boolean;
	user: IUser;
	isLoading: boolean;
	error: string;
};

export enum ActionAuthTypes {
	SET_IS_AUTH = 'SET_IS_AUTH',
	SET_ERROR = 'SET_ERROR',
	SET_USER = 'SET_USER',
	SET_ISLOADING = 'SET_ISLOADING',
}

export interface SetIsAuthAction {
	type: ActionAuthTypes.SET_IS_AUTH,
	payload: boolean,
}

export interface SetErrorAction {
	type: ActionAuthTypes.SET_ERROR,
	payload: string
}
export interface SetUserAction {
	type: ActionAuthTypes.SET_USER,
	payload: IUser
}
export interface SetIsLoadingAction {
	type: ActionAuthTypes.SET_ISLOADING,
	payload: boolean,
}

export type AuthActions =
	SetIsAuthAction |
	SetErrorAction |
	SetUserAction |
	SetIsLoadingAction;