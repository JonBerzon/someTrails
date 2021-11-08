import React from "react";

class Review extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let { fname, lname, date, description, activity} = this.props.review
        return(
            <div className="review-div">
                <div className="review-upper-flex">
                    <div className="review-left-div">
                        <img src={window.userIcon}/>
                    </div>
                    <div className="review-right-div">
                        <h1>{`${fname} ${lname}`}</h1>
                        <div className="review-right-inner-div">
                            <img src={window.stars}/>
                            <p>{date}</p>
                        </div>
                    </div>
                </div>
                <div className="review-bottom-descriptor">
                    <p>{activity}</p>
                    <p>Bugs</p>
                    <p>Flooded</p>
                </div>
                <div className="review-description">
                    <p>{description}</p>
                </div>
            <hr />
            </div>
        )
    }


}

export default Review;