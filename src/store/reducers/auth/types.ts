export interface AuthReducerState {
	isAuth: boolean
};

export enum ActionAuthTypes {
	SET_IS_AUTH = 'SET_IS_AUTH',
	REMOVE_IS_AUTH = 'REMOVE_IS_AUTH',
}

interface SetIsAuth {
	type: ActionAuthTypes.SET_IS_AUTH,
}

interface RemoveIsAuth {
	type: ActionAuthTypes.REMOVE_IS_AUTH,
}

export type AuthActions = SetIsAuth | RemoveIsAuth;