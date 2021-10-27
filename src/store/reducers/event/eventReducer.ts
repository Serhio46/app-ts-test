import { ActionEventTypes, EventActions, eventReducerState } from './types';

const inintialState: eventReducerState = {
	events: [],
	friends: []
}

const eventReducer = (state = inintialState, action: EventActions): eventReducerState => {
	switch (action.type) {
		case (ActionEventTypes.SET_FRIENDS):
			return {
				...state,
				friends: action.payload
			};
		case (ActionEventTypes.SET_EVENTS):
			return {
				...state,
				events: action.payload
			};
		default:
			return state;
	}
}

export default eventReducer;