import { combineReducers } from "redux";
import ListReducer from "./list_reducer";


const RootReducer =  combineReducers({
	Lists : ListReducer

});

export default RootReducer;