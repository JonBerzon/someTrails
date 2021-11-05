export const fetchWeather = () => {
    return $.ajax({
        method: "GET",
        url: "http://api.weatherapi.com/v1/forecast.json?key=1a2d8bae081c402ba5c175223210511&q=40.31195,-105.64567&days=5&aqi=no&alerts=no"
    })
}

