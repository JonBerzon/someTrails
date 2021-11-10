import React from "react";
import ReactStars from "react-rating-stars-component"


class Stars extends React.Component{

    ratingChanged = (newRating) => {
        console.log(newRating)
    }

    render(){
        return(
            <ReactStars {...this.props.options} onChange={this.props.onChange} value={this.props.rating} />
        )
    }

}


export default Stars;
