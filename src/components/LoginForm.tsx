import { FC } from "react";
import { TextField, Box, Stack, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { AuthActionCreators } from "../store/reducers/auth/authActions";
import { useTypedSelector } from "../hooks/useTypedSelector";


interface submitData {
	userName: string;
	password: string;
}

const SignInForm: FC = () => {

	const dispatch = useDispatch();
	const { error, isLoading } = useTypedSelector(({ authReducer }) => authReducer);

	const schema = yup.object().shape({
		userName: yup.string().required(),
		password: yup.string().min(4).max(15).required(),
	})

	const { register, handleSubmit, formState: { errors } } = useForm(
		{ resolver: yupResolver(schema) }
	);

	const submitForm = (data: submitData) => {
		dispatch(AuthActionCreators.logIn(data.userName, data.password));
	}

	return (
		<Box onSubmit={handleSubmit(submitForm)}
			component="form"
			sx={{
				width: 400,
				bgcolor: "lightslategrey",
				alignItems: 'center',
				justifyContent: 'center',
				p: "15px",
				borderRadius: "15px"
			}}
			noValidate
			autoComplete="off"
		>
			{error && <div style={{ color: 'red' }}>{error}</div>}
			<Stack spacing={4} sx={{ mb: "30px" }} >
				{errors.userName && <p style={{ color: "red" }}>{errors.userName.message}</p>}
				<TextField id="userName" sx={{ bgcolor: "white" }} label="User Name" variant="outlined" {...register("userName", { required: "Required field" })} />
				{errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
				<TextField id="password" sx={{ bgcolor: "white" }} label="password" variant="outlined" type="password" {...register("password", { required: "Required field" })} />
			</Stack>
			<Grid container sx={{ alignItems: 'center', justifyContent: 'center' }}>
				<Grid item ><LoadingButton variant="contained" type='submit' loading={isLoading}> Submit</LoadingButton></Grid>
			</Grid>
		</Box >
	);
}

export default SignInForm;