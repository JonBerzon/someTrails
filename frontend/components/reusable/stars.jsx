import React from "react";
import ReactStars from "react-rating-stars-component"


class Stars extends React.Component{

    render(){
        // this.props.options ||= {
        //     size: 15,
        //     isHalf: true,
        //     edit: false
        // }
        // this.props.rating ||= 4.5
        let options = this.props.options
        let rating = this.props.rating
        return(
            <ReactStars {...options} value={rating} />
        )
    }

}


export default Stars;
