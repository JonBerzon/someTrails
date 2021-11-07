export const fetchWeather = (coord) => {
    return $.ajax({
        method: "GET",
        // url: `http://api.weatherapi.com/v1/forecast.json?key=1a2d8bae081c402ba5c175223210511&q=${coord.lat},${coord.long}&days=5&aqi=no&alerts=no`
        url: `https://api.weatherapi.com/v1/forecast.json?key=1a2d8bae081c402ba5c175223210511&q=${coord.lat},${coord.long}&days=3&aqi=no&alerts=no`

    })
}

