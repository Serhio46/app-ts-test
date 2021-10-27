import axios from 'axios';
import { AppDispatch } from '../../index';
import { IFriend } from '../../../models/IFriend';
import { IEvent } from '../../../models/IEvent';
import { SetFriendsAction, ActionEventTypes, SetEventsAction } from './types';

export const eventActionCreators = {

	setFriends: (friends: IFriend[]): SetFriendsAction => ({ type: ActionEventTypes.SET_FRIENDS, payload: friends }),
	setEvents: (payload: IEvent[]): SetEventsAction => ({ type: ActionEventTypes.SET_EVENTS, payload }),
	fetchFriends: () => async (dispatch: AppDispatch) => {
		try {
			const response = await axios.get<IFriend[]>('./friends.json');
			dispatch(eventActionCreators.setFriends(response.data));
		} catch (error) {
			console.log(error)
		}
	},
	createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
		try {
			const events = localStorage.getItem("events") || '[]';
			const json = JSON.parse(events) as IEvent[];
			json.push(event);
			dispatch(eventActionCreators.setEvents(json));
			localStorage.setItem("events", JSON.stringify(json))
		} catch (error) {
			console.log(error);
		}
	}
}