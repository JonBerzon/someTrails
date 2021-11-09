import React from "react";

class TrailPreview extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        let {trail, park} = this.props
        return(
            <div className="trail-preview-div" onClick={() => this.props.toTrail(trail.id)}>
                <img src={trail.photosUrl[0]}/>
                <h1>{trail.name}</h1>
                <h2>{park.name}</h2>
                <div className="trail-preview-difficulty-div">
                    <span className={trail.difficulty}>{trail.difficulty}</span>
                    <img src={window.stars} />
                    <p>({trail.reviews.length})</p>
                </div>
                <div className="trail-preview-length-div">
                    <h3>Length: {trail.length}</h3>
                    <span>&#8226;</span>
                    <h3>Est. {trail.duration}</h3>
                </div>

            </div>
        )
    }
}

export default TrailPreview