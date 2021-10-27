import React, { FC } from 'react';
import isWeekend from 'date-fns/isWeekend';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { Button, TextField } from '@mui/material';
import { IEvent } from '../models/IEvent';

interface CalendarProps {
	openModal: () => void;
	events: IEvent[];
}


const Calendar: FC<CalendarProps> = ({ openModal, events }) => {
	const [value, setValue] = React.useState<Date | null>(new Date());

	return (
		<>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<StaticDatePicker<Date>
					orientation="landscape"
					openTo="day"
					value={value}
					shouldDisableDate={isWeekend}
					onChange={(newValue) => {
						setValue(newValue);
					}}
					renderInput={(params) => <TextField {...params} />}
				/>
			</LocalizationProvider>
			<Button variant="contained" onClick={openModal}>Добавить Event</Button>
		</>
	);
}

export default Calendar;

