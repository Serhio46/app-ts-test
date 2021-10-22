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


		<form className='form' onSubmit={handleSubmit(submitForm)}>
			{errors.userName && <p style={{ color: "red" }}>{errors.userName.message}</p>}
			<input type="text" {...register("userName", { required: "Required field" })} />
			{errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
			<input type="text"{...register("email", { required: "Required field" })} />
			{errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
			<input type="text" {...register("password", { required: "Required field" })} />
			{errors.confirmPassword && <p style={{ color: "red" }}>"Password should match "</p>}
			<input type="text" {...register("confirmPassword", { required: "Required field" })} />
			<button>Jnghfdbnm</button>
		</form>

	);

}

export default LoginForm