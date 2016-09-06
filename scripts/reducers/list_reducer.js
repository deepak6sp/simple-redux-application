import { DISPLAYLIST } from './../actions/actions_types';

export default (state = [],action)=> {
	switch (action.type){
		case DISPLAYLIST : return action.payload;
		default : return state

	}
}