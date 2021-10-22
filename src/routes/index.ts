import React from "react";
import Event from "../pages/Event";
import Login from "../pages/Login";

export interface Iroute {
	path: string;
	component: React.ComponentType;
	exact?: boolean;
}

export enum RoutesName {
	LOGIN = '/login',
	EVENT = '/',
}

export const publicRoutes: Iroute[] = [
	{ path: RoutesName.LOGIN, exact: true, component: Login }
]
export const privateRoutes: Iroute[] = [
	{ path: RoutesName.EVENT, exact: true, component: Event }
]