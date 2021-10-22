
import React, { FC } from 'react';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { useTypedSelector } from "./hooks/useTypedSelector";

const App: FC = () => {

	const { isAuth } = useTypedSelector(({ authReducer }) => authReducer);

	return (
		<>
			<Navbar isAuth={isAuth} />
			<AppRouter isAuth={isAuth} />
		</>
	);
}

export default App;