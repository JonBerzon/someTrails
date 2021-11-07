import React from "react";
import { FETCH_WEATHER } from "../actions/weather_actions";


const WeatherReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case FETCH_WEATHER:
            return action.weather;    
        default:
            return state;
    }
}

export default WeatherReducer;