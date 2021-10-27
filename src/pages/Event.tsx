import React, { FC, useState, useEffect } from 'react';
import Calendar from "../components/Calender";
import ModalEvent from '../components/ModalEvent';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { eventActionCreators } from '../store/reducers/event/eventActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Event: FC = () => {

	const [modalActive, setModalActive] = useState(false);
	const handleOpenModal = () => setModalActive(true);
	const handleCloseModal = () => setModalActive(false);

	const dispatch = useDispatch();
	const { friends } = useTypedSelector((state) => state.eventReducer);

	useEffect(() => {
		dispatch(eventActionCreators.fetchFriends())
	}, [])

	return (
		<Container maxWidth='lg'>
			<Grid container className="h100" sx={{ alignItems: 'center', justifyContent: 'center' }} direction='column'  >
				<Calendar openModal={handleOpenModal} events={[]} />
				<ModalEvent
					friends={friends}
					handleClose={handleCloseModal}
					title="Добавить событие"
					visible={modalActive}
				/>
			</Grid>
		</Container>
	)
}

export default Event;