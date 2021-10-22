

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