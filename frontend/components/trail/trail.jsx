import React from "react";
import BasicHeader from "../reusable/basic_header";
import { Link } from "react-router-dom";
import TrailHeader from "./trail_header";
import Map from "../map/map";

class Trail extends React.Component{
    constructor(props){
        super(props)
        this.toPark = this.toPark.bind(this)
    }

    componentDidMount(){
        this.props.fetchTrails();
    }

    toPark(id){
        this.props.history.push(`/park/${id}`)
    }
   

    render(){
        if (!this.props.trails) return null;
        if (!this.props.trail) return null;
        let {trail} = this.props
        let {park} = trail
        let arr = [park.country, park.state, park.name, trail.name]

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

                    </div>

                </div>
            </div>
        )
    }
}

export default Trail;