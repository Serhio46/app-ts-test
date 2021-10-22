import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { FC } from "react";
import { useDispatch } from 'react-redux';



interface NavbarProps {
	isAuth: boolean;
}

const Navbar: FC<NavbarProps> = ({ isAuth }) => {

	const dispatch = useDispatch();

	/* const logIn = () => {
		dispatch()
	} */

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
							Vasilyi
						</Typography>
						<IconButton
							onClick={() => console.log('LogOut')}
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

