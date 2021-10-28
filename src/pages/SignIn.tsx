import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import React, { FC } from 'react';
import SignInForm from '../components/SignInForm';

const SigIn: FC = () => {
	return (
		<Container maxWidth='lg'>
			<Grid container className="h100" sx={{ alignItems: 'center', justifyContent: 'center' }}  >
				<SignInForm />
			</Grid>
		</Container>
	)
}

export default SigIn;