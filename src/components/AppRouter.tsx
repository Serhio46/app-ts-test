import { FC } from 'react';
import { Route, Switch, Redirect } from "react-router";
import { privateRoutes, publicRoutes, RoutesName } from "../routes";

interface AppRouterProps {
	isAuth: boolean;
}

const AppRouter: FC<AppRouterProps> = ({ isAuth }) => {
	return (
		isAuth ?
			<Switch>
				{privateRoutes.map(route =>
					<Route path={route.path}
						exact={route.exact}
						component={route.component}
						key={route.path}
					/>
				)}
				<Redirect to={RoutesName.EVENT} />
			</Switch>
			:
			<Switch>
				{publicRoutes.map(route =>
					<Route path={route.path}
						exact={route.exact}
						component={route.component}
						key={route.path} />
				)}
				<Redirect to={RoutesName.LOGIN} />
			</Switch>
	);
}

export default AppRouter;