import React from "react";
import BasicHeader from "../reusable/basic_header";
import { Link } from "react-router-dom";
import TrailHeader from "./trail_header";
import Map from "../map/map";
import { fetchWeather, weatherResponse } from "../../util/weather_api_util";
import TrailPreview from "./trail_preview";
import Weather from "../reusable/weather";
import Daylight from "../reusable/daylight";

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
                long: this.props.trail.longitude
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
                        <div className="trail-descriptors">
                            {
                                trail.descriptors.map(desc => {
                                    return(
                                    <div key={desc} className="trail-descriptor-index">
                                        <h1>{desc}</h1>
                                    </div>
                                )})
                            }

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
                                    <Weather weather={weather}/>
                            ) : (
                                    <Daylight weather={weather}/>  
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
                                                <div key={trl.id}>
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