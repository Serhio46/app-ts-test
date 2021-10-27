import { IEvent } from '../../../models/IEvent';
import { IFriend } from '../../../models/IFriend';

export interface eventReducerState {
	friends: IFriend[];
	events: IEvent[];
}


export enum ActionEventTypes {
	SET_FRIENDS = "SET_FRIENDS",
	SET_EVENTS = "SET_EVENTS",
}

export interface SetFriendsAction {
	type: ActionEventTypes.SET_FRIENDS,
	payload: IFriend[],
}

export interface SetEventsAction {
	type: ActionEventTypes.SET_EVENTS,
	payload: IEvent[],
}

export type EventActions = SetFriendsAction | SetEventsAction;