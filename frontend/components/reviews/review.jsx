import React from "react";

class Review extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let {date, description, activity, conditions} = this.props.review
        let {fname, lname} = this.props.user
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
                    {
                        conditions.map(condition =>{
                            return <p>{condition}</p>
                        })
                    }
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