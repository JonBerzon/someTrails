import React from "react";
import Stars from "../reusable/stars";

class Review extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let {date, description, activity, conditions, rating} = this.props.review
        let {fname, lname} = this.props.user

        let options ={
            size: 15,
            isHalf: true,
            edit: false
        }



        return(
            <div className="review-div">
                <div className="review-upper-flex">
                    <div className="review-left-div">
                        <img src={window.userIcon}/>
                    </div>
                    <div className="review-right-div">
                        <h1>{`${fname} ${lname}`}</h1>
                        <div className="review-right-inner-div">
                            {/* <img src={window.stars}/> */}
                            <div className="review-stars">
                                <Stars options={options} rating={rating}/>
                            </div>
                            {/* <p>{date}</p> */}
                            <p>{new Date(date + " 00:00").toString().slice(4,15)}</p>
                        </div>
                    </div>
                </div>
                <div className="review-bottom-descriptor">
                    <p>{activity}</p>
                    {
                        conditions.map(condition =>{
                            return <p key={condition}>{condition}</p>
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