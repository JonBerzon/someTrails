import React from "react";

class ParkTrail extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let {trail, idx, park} = this.props
        return(
            <div className="park-trail-div" onClick={() => this.props.handleClick(trail.id)}>
                <img src={trail.photosUrl[0]} alt="" />
                <div className="park-trail-info">
                    <h1>#{idx + 1} - {trail.name}</h1>
                    <h2>{park.name}</h2>
                    <div className="park-trail-difficulty-div">
                        <span className={trail.difficulty}>{trail.difficulty}</span>
                        <img src={window.stars}/>
                        <p>({Math.round(Math.random() * 3000)})</p>
                    </div>
                    <div className="park-trail-length-div">
                        <h3>Length: {trail.length}</h3>
                        <span>&#8226;</span>
                        <h3>Est. {trail.duration}</h3>
                    </div>
                    <div className="park-trail-bottom-text">
                        <h4>{trail.description}</h4>
                        <h5>Show More</h5>
                    </div>
                    
                </div>

            </div>
        )
    }
}

export default ParkTrail;