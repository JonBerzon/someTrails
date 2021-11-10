import React from "react";
import Stars from "../reusable/stars";


class TrailHeader extends React.Component{

    render(){
        let {trail, park, reviews} = this.props

        let options = {
            size: 15,
            isHalf: true,
            edit: false
        }

        let rating = 0;
        reviews.forEach(review => rating += review.rating)
        rating = rating / reviews.length
        return(
            <div>
                <div className="trail-header">
                    <img src={trail.photosUrl[0]}/>
                    <div className="trail-picture-header-text">
                        <h1>{trail.name}</h1>
                        <div className="trail-picture-stats">
                            <h2 className={trail.difficulty}>{trail.difficulty}</h2>
                            <div className="trail-head-stars">
                                <Stars options={options} rating={rating} />
                            </div>
                            <p>({trail.reviews.length})</p>
                        </div>
                        <h3>{park.name}</h3>
                    </div>
                </div>
                <div className="trail-mini-nav">
                    <div onClick={() => this.props.toPark(park.id)}>
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

export default TrailHeader;