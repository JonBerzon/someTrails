import React from "react"
import * as WeatherApiUtil from "../util/weather_api_util"

export const FETCH_WEATHER = "FETCH_WEATHER"

const receiveWeather = weather =>({
    type: FETCH_WEATHER,
    weather
})

export const fetchWeather = () => dispatch => {
    return WeatherApiUtil.fetchWeather()
        .then(weather => dispatch(receiveWeather(weather)))
}

