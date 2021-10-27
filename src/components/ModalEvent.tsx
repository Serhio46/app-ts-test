import React, { FC } from 'react';
import Box from '@mui/material/Box';
import EventForm from './EventForm';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { IFriend } from '../models/IFriend';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

interface ModalEventProps {
	title: string;
	visible: boolean;
	handleClose: () => void;
	friends: IFriend[],
}

const ModalEvent: FC<ModalEventProps> = ({ title, visible, handleClose, friends }) => {

	return (
		<div>
			<Modal
				open={visible}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						{title}
					</Typography>
					<EventForm friends={friends} handleClose={handleClose} />
				</Box>
			</Modal>
		</div>
	);
}

export default ModalEvent;