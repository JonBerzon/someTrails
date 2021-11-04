import { combineReducers } from "redux";
import ParksReducer from "./parks_reducer";
import TrailsReducer from "./trails_reducer";
import UsersReducer from "./users_reducer";

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    parks: ParksReducer,
    trails: TrailsReducer
})

export default EntitiesReducer