import React from "react";
class Weather extends React.Component{
    render(){
        let weath = <h1>Loading Weather...</h1>
        if (!this.props.weather.forecast) {
            weath
        } else {
            weath = Object.values(this.props.weather.forecast.forecastday).map(forecast => {
                return (
                    <div key={forecast.date} className="trail-weather">
                        <h1>{new Date(forecast.date + " 00:00").toLocaleDateString('en-Us', { weekday: "long" })}</h1>
                        <img src={forecast.day.condition.icon} alt="" />
                        <h1>{forecast.day.maxtemp_f}&#176;  /  {forecast.day.mintemp_f}&#176; F</h1>
                    </div>
                )
            })
        }      
        return(
            <div className="trail-weather-div">
                {weath}
            </div>
        )
    }
}

export default Weather