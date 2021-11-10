import React from "react";
import Stars from "../reusable/stars";

class TrailPreview extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        let {trail, park, totalReviews} = this.props
        let options = {
            size: 15,
            isHalf: true,
            edit: false
        }
        let reviews = Object.values(totalReviews).filter(review => review.trail_id === trail.id)
        let rating = 0;
        reviews.forEach(review => rating += review.rating)
        rating = rating / reviews.length
        return(
            <div className="trail-preview-div" onClick={() => this.props.toTrail(trail.id)}>
                <img src={trail.photosUrl[0]}/>
                <h1>{trail.name}</h1>
                <h2>{park.name}</h2>
                <div className="trail-preview-difficulty-div">
                    <span className={trail.difficulty}>{trail.difficulty}</span>
                    {/* <img src={window.stars} /> */}
                    <div className="trail-preview-stars">
                        <Stars options={options} rating={rating}/>

                    </div>
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