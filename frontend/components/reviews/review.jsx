import React from "react";

class Review extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="review-div">
                <div className="review-upper-flex">
                    <div className="review-left-div">
                        <img src={window.userIcon}/>
                    </div>
                    <div className="review-right-div">
                        <h1>Jonathan Berzon</h1>
                        <div className="review-right-inner-div">
                            <img src={window.stars}/>
                            <p>November 7, 2021</p>
                        </div>
                    </div>
                </div>
                <div className="review-bottom-descriptor">
                    <p>Hike</p>
                    <p>Bugs</p>
                    <p>Flooded</p>
                </div>
                <div className="review-description">
                    <p>Dog friendly, fence free, Alley Pond Park is a combination of neighbourhood city/ residential park with paved walkways, comfort station, great lawn, baseball fields, Adventure Center, drinking fountains, picnic tables & BBQ metal stands, stone pits, wooded area with trails (with highway sounds) ponds, separated by roads, highway into 3-parts with only 200 car parking lot but accessed by parking along the perimeter streets and walking in by one of the numerous trail.</p>
                </div>
            <hr />
            </div>
        )
    }


}

export default Review;