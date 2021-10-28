import React from "react";
import Event from "../pages/Event";
import Login from "../pages/Login";
import SignIn from "../pages/SignIn";

export interface Iroute {
	path: string;
	component: React.ComponentType;
	exact?: boolean;
}

export enum RoutesName {
	LOGIN = '/login',
	EVENT = '/',
	SIGN_IN = '/signin',
}

export const publicRoutes: Iroute[] = [
	{ path: RoutesName.LOGIN, exact: true, component: Login },
	{ path: RoutesName.SIGN_IN, exact: true, component: SignIn }
]
export const privateRoutes: Iroute[] = [
	{ path: RoutesName.EVENT, exact: true, component: Event }
]