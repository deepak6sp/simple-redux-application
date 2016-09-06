import { DISPLAYLIST } from './actions_types';

export const displayList = () => {
	return {
		type: DISPLAYLIST,
		payload : [
			"learning react application",
			"learning redux application",
			"learning javascript testing",
			"learning redux testing"
		]
	}
}