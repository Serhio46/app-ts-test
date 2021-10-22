import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import React, { FC } from 'react';
import LoginForm from '../components/LoginForm';

const Login: FC = () => {
	return (
		<>
			<Container maxWidth='lg'>
				<Grid container className="h100" sx={{ alignItems: 'center', justifyContent: 'center' }}  >
					<LoginForm />
				</Grid>

			</Container>
		</>
	);
}

export default Login;