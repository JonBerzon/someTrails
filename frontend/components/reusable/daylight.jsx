import React from "react";
class Daylight extends React.Component{
    render(){
        let dlight = <h1>Loading Daylight...</h1>
        if (!this.props.weather.forecast) {
            dlight
        } else {
            let today = this.props.weather.forecast.forecastday[0]
            dlight =
                <div className="trail-weather-div">
                    <div>
                        <h1>Sunrise</h1>
                        <img className="trail-dlight" src={window.sunrise} alt="" />
                        <h1>{today.astro.sunrise}</h1>
                    </div>
                    <div>
                        <h1>Sunset</h1>
                        <img className="trail-dlight" src={window.sunset} alt="" />
                        <h1>{today.astro.sunset}</h1>
                    </div>
                </div>
        }
        return(
            <div className="daylight-div">
                {dlight}
            </div>
        )
    }
}

export default Daylight;