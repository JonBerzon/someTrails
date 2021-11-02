import { combineReducers } from "redux";
import ParksReducer from "./parks_reducer";
import UsersReducer from "./users_reducer";

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    parks: ParksReducer
})

export default EntitiesReducer