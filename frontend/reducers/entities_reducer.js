import { combineReducers } from "redux";
import ParksReducer from "./parks_reducer";
import ReviewsReducer from "./reviews_reducer";
import TrailsReducer from "./trails_reducer";
import UsersReducer from "./users_reducer";
import WeatherReducer from "./weather_reducer";

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    parks: ParksReducer,
    trails: TrailsReducer,
    weather: WeatherReducer,
    reviews: ReviewsReducer
})

export default EntitiesReducer