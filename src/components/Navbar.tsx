import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { FC } from "react";
import { useDispatch } from 'react-redux';
import { AuthActionCreators } from "../store/reducers/auth/authActions";
import { useTypedSelector } from "../hooks/useTypedSelector";





const Navbar: FC = () => {

	const { isAuth, user } = useTypedSelector(({ authReducer }) => authReducer);
	const dispatch = useDispatch();

	const logOut = () => {
		dispatch(AuthActionCreators.logOut());
	}

	return (
		<AppBar
			position="static"
		>
			<Toolbar>
				<Typography
					variant='h6'
					component='span'
					sx={{ flexGrow: 1 }}
				>
					NewTodo with test and TypeScript
				</Typography>
				{isAuth ?
					<>
						<Typography
							variant='h6'
							component='span'
							sx={{ mr: '10px' }}
						>
							{user.username}
						</Typography>
						<IconButton
							onClick={logOut}
							color='inherit'
						>
							<LogoutIcon />
						</IconButton>
					</>

					:
					<IconButton
						onClick={() => console.log('LogIn')}
						color='inherit'
					>
						<LoginIcon />
					</IconButton>
				}
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;

