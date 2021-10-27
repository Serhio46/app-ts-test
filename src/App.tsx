
import React, { FC, useEffect } from 'react';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { useDispatch } from 'react-redux';
import { AuthActionCreators } from "./store/reducers/auth/authActions";
import { IUser } from "./models/IUser"

const App: FC = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.getItem('auth')) {
			dispatch(AuthActionCreators.setUser({ username: localStorage.getItem('username' || '') } as IUser));
			dispatch(AuthActionCreators.setIsAuth(true))
		}
	}, [])

	return (
		<>
			<Navbar />
			<AppRouter />
		</>
	);
}

export default App;