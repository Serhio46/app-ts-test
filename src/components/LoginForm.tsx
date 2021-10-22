import { FC } from "react";
import { TextField, Box, Button, Stack, Grid } from '@mui/material';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';


const schema = yup.object().shape({
	userName: yup.string().required(),
	email: yup.string().email().required(),
	password: yup.string().min(4).max(15).required(),
	confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
})

const LoginForm: FC = () => {

	const { register, handleSubmit, formState: { errors } } = useForm(
		{ resolver: yupResolver(schema) }
	);

	const submitForm = (data: {}) => {
		console.log(data);
	}

	return (
		<Box onSubmit={handleSubmit(submitForm)}
			component="form"
			sx={{
				width: 400,
				height: 400,
				bgcolor: "lightslategrey",
				alignItems: 'center',
				justifyContent: 'center',
				p: "15px",
				borderRadius: "15px"
			}}
			noValidate
			autoComplete="off"
		>
			<Stack spacing={4} sx={{ mb: "30px" }} >
				{errors.userName && <p style={{ color: "red" }}>{errors.userName.message}</p>}
				<TextField id="userName" sx={{ bgcolor: "white" }} label="User Name" variant="outlined" {...register("userName", { required: "Required field" })} />
				{errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
				<TextField id="email" sx={{ bgcolor: "white" }} label="email" variant="outlined" type="email" {...register("email", { required: "Required field" })} />
				{errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
				<TextField id="password" sx={{ bgcolor: "white" }} label="password" variant="outlined" type="password" {...register("password", { required: "Required field" })} />
				{errors.confirmPassword && <p style={{ color: "red" }}>"Password should match "</p>}
				<TextField id="confirmpassword" sx={{ bgcolor: "white" }} label="confirmpassword" variant="outlined" type="password" {...register("confirmPassword", { required: "Required field" })} />
			</Stack>
			<Grid container sx={{ alignItems: 'center', justifyContent: 'center' }}>
				<Grid item ><Button variant="contained" type='submit'> Submit</Button></Grid>
			</Grid>
		</Box >

	);

}

export default LoginForm