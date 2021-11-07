import React from "react"
import * as WeatherApiUtil from "../util/weather_api_util"

export const FETCH_WEATHER = "FETCH_WEATHER"

const receiveWeather = weather =>({
    type: FETCH_WEATHER,
    weather
})

export const fetchWeather = (coord) => dispatch => {
    return WeatherApiUtil.fetchWeather(coord)
        .then(weather => dispatch(receiveWeather(weather)))
}

