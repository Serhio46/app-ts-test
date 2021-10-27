import { FC, useState } from "react";
import { TextField, Box, Stack, Grid, FormControl, MenuItem, InputLabel } from '@mui/material';
import { LoadingButton, DesktopDatePicker } from '@mui/lab';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { IFriend } from '../models/IFriend';
import { useDispatch } from 'react-redux';
import { eventActionCreators } from '../store/reducers/event/eventActions';
import { IEvent } from "../models/IEvent";
import moment from 'moment';
import { useTypedSelector } from "../hooks/useTypedSelector";

interface submitData {
	description: string;
}

interface EventFormProp {
	friends: IFriend[];
	handleClose: () => void;
}

const EventForm: FC<EventFormProp> = ({ friends, handleClose }) => {

	const [date, setDate] = useState<Date | null>(new Date());

	const [friend, setFriend] = useState('');
	const handleChange = (event: SelectChangeEvent) => {
		setFriend(event.target.value as string);
	};

	const dispatch = useDispatch();
	const { user } = useTypedSelector(({ authReducer }) => authReducer);

	const schema = yup.object().shape({
		description: yup.string().required(),
	})

	const { register, handleSubmit, formState: { errors } } = useForm(
		{ resolver: yupResolver(schema) }
	);

	const selectDate = (date: Date | null) => {
		if (date) {
			return moment(date).format("YYYY.MM.DD");
		}
		return null
	}

	const submitForm = (data: submitData) => {

		const event: IEvent = {
			author: user.username,
			description: data.description,
			date: selectDate(date),
			friend: friend
		}
		console.log(event)
		dispatch(eventActionCreators.createEvent(event));
		handleClose()
	}


	return (
		<Box onSubmit={handleSubmit(submitForm)}
			component="form"
			sx={{
				alignItems: 'center',
				justifyContent: 'center',
				p: "15px",
				borderRadius: "15px"
			}}
			noValidate
			autoComplete="off"
		>
			<Stack spacing={4} sx={{ mb: "30px" }} >
				{errors.description && <p style={{ color: "red" }}>{errors.description.message}</p>}
				<TextField id="description" sx={{ bgcolor: "white" }} label="description" variant="outlined" {...register("description", { required: "Required field" })} />
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DesktopDatePicker
						label="Date"
						value={date}
						onChange={(newValue) => {
							setDate(newValue);
						}}
						renderInput={(params) => <TextField {...params} />}
					/* {...register("date", { required: "Required field" })} */
					/>
				</LocalizationProvider>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Choose friend</InputLabel>
					<Select
						labelId="friend"
						id="friend"
						value={friend}
						label="Friend"
						onChange={handleChange}
					/* {...register("guest", { required: "Required field" })} */
					>
						{friends && friends.map(friend => <MenuItem value={friend.friendname} key={friend.id}>{friend.friendname}</MenuItem>)}
					</Select>
				</FormControl>
			</Stack>
			<Grid container sx={{ alignItems: 'center', justifyContent: 'center' }}>
				<Grid item ><LoadingButton variant="contained" type='submit' > Submit</LoadingButton></Grid>
			</Grid>
		</Box >
	);
}

export default EventForm;