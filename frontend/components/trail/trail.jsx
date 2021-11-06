import React from "react";
import BasicHeader from "../reusable/basic_header";
import { Link } from "react-router-dom";
import TrailHeader from "./trail_header";
import Map from "../map/map";
import { fetchWeather, weatherResponse } from "../../util/weather_api_util";
import TrailPreview from "./trail_preview";

class Trail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selected: "weather"
        }
        this.toPark = this.toPark.bind(this)
        this.switchSelected = this.switchSelected.bind(this)
        this.toTrail = this.toTrail.bind(this)
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        this.props.fetchTrails()
    }

    componentDidUpdate(prevProps){
        if (this.props.trail != prevProps.trail){
            this.props.fetchWeather({
                lat: this.props.trail.latitude,
                long: this.props.trail.long
            })
        }
    }

    
    switchSelected(){
        
        this.setState({
            selected: this.state.selected === "weather" ? "daylight" : "weather"
        })
    }

    toPark(id){
        window.scrollTo(0, 0)
        this.props.history.push(`/park/${id}`)
    }

    toTrail(id){
        window.scrollTo(0, 0)
        this.props.history.push(`/trail/${id}`)
    }
   

    render() {
        if (!this.props.weather) return null;
        if (!this.props.trails) return null;
        if (!this.props.trail) return null;
        
        let {trail} = this.props
        let {park} = trail
        let arr = [park.country, park.state, park.name, trail.name]
        let { weather }  = this.props

        let weath = <h1>Loading Weather...</h1>
        if (!this.props.weather.forecast) {
            weath 
        } else {
            weath = Object.values(weather.forecast.forecastday).map(forecast => {
                return (
                    <div key={forecast.date} className="trail-weather">
                        <h1>{new Date(forecast.date + " 00:00").toLocaleDateString('en-Us', { weekday: "long" })}</h1>
                        <img src={forecast.day.condition.icon} alt="" />
                        <h1>{forecast.day.maxtemp_f}&#176;  /  {forecast.day.mintemp_f}&#176; F</h1>
                    </div>
                )
            })
        }

        let dlight = <h1>Loading Daylight...</h1>
        if (!this.props.weather.forecast) {
            dlight
        } else {
            let today = weather.forecast.forecastday[0]
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
            <div className="trail-bg-color">
                <div className="trail-div">
                    <hr />
                    <BasicHeader arr={arr}/>
                    <TrailHeader trail={trail} park={park} toPark={this.toPark}/>
                </div>
                <div className="trail-lower-container">
                    <div className="trail-lower-left">
                        <div className="trail-description">{trail.description}<hr /></div>
                        <div className="trail-stats-div">
                            <div className="trail-stats">
                                <h1>Length</h1>
                                <h2>{trail.length}</h2>
                            </div>
                            <div className="trail-stats">
                                <h1>Elevation gain</h1>
                                <h2>{trail.elevation}</h2>
                            </div>
                            <div className="trail-stats">
                                <h1>Route type</h1>
                                <h2>{trail.route}</h2>
                            </div>
                        </div>

                        <div className="weather-header">
                            <h1 onClick={this.switchSelected}
                                className={this.state.selected === "weather" ? "trail-selected" : "trail-nonselected"}>
                                Weather</h1>
                            <h1 onClick={this.switchSelected}
                                className={this.state.selected === "daylight" ? "trail-selected" : "trail-nonselected"}>
                                Daylight</h1>
                        </div>
                        {
                            this.state.selected === "weather" ? (
                                <div className="trail-weather-div">{weath}</div>
                            ) : (
                                <div>{dlight}</div>
                            )
                        }
                        
                    </div>
                    <div className="trail-lower-right">
                        <div className="trail-map">
                            <Map
                                containerStyle={{
                                    width: '300px',
                                    height: '250px',
                                    borderRadius: '10px'
                                }}
                                center={{
                                    lat: trail.latitude,
                                    lng: trail.longitude
                                }}
                                zoom={17}
                                marker={{
                                    lat: trail.latitude,
                                    lng: trail.longitude
                                }}
                                defaultMapOptions = {{
                                    fullscreenControl: false,
                                    mapTypeControl: false,
                                    keyboardShortcuts: false
                                }}
                            />
                        </div>
                        <div className="trail-nearby">
                            <h1>Nearby trails</h1>
                            <div className="trail-nearby-flex"> 
                                {
                                    this.props.trails.map(trl =>{
                                        if (trl.id === trail.id){
                                            return ""
                                        } else {
                                            return (
                                                <div>
                                                    <TrailPreview trail={trl} park={park} toTrail={this.toTrail} />
                                                    <br />
                                                </div>
                                            )
                                        }
                                        
                                    })
                                }
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Trail;