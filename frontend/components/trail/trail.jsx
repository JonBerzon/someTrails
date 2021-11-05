import React from "react";
import BasicHeader from "../reusable/basic_header";
import { Link } from "react-router-dom";

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
            <div className="trail-div">
                <hr />
                <BasicHeader arr={arr}/>
                <div className="trail-header">
                    <img src={trail.photosUrl[0]}/>
                    <div className="trail-picture-header-text">
                        <h1>{trail.name}</h1>
                        <div className="trail-picture-stats">
                            <h2 className={trail.difficulty}>{trail.difficulty}</h2>
                            <img src={window.stars}/>
                            <p>({Math.floor(Math.random() * 10000)})</p>
                        </div>
                        <h3>{park.name}</h3>
                    </div>
                </div>
                <div className="trail-mini-nav">
                    <div onClick={() => this.toPark(park.id)}>
                        <span className="outer-circle"><img src={window.park} /></span>
                        <p>Park</p>
                    </div>
                    <a target="_blank" href={trail.directions}>
                        <span className="outer-circle"><img src={window.direction} /></span>
                        <p>Directions</p>  
                    </a>
                    <div onClick={() => window.print()}>
                        <span className="outer-circle"><img src={window.printer} /></span>
                        <p>Print Page</p>
                    </div>
                    <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsometrails.herokuapp.com%2F%23%2F&amp;src=sdkpreparse">
                        <span className="outer-circle"><img src={window.share}/></span>
                        <p>Share</p>
                    </a>

                </div>
            </div>
        )
    }
}

export default Trail;