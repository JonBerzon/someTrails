import React from "react";
import Stars from "../reusable/stars"

class ReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            review: {
                user_id: null,
                trail_id: null,
                date: new Date().toString().slice(4, 15),
                description: "",
                rating: 0,
                activity: "Hiking"
            },
            review_conditions: {
                review_id: null,
                condition_id: null
            },
            formType: this.props.formType,
            form: 1,
            activitySwitch: false,
            dateSwitch: false
        }
        this.setRating = this.setRating.bind(this)
        this.setDescription = this.setDescription.bind(this)
        this.changeForm = this.changeForm.bind(this)
        this.activitySwitch = this.activitySwitch.bind(this)
        this.dateSwitch = this.dateSwitch.bind(this)
    }

    setRating(newRating){
        let newState = this.state
        newState.review.rating = newRating
        this.setState(newState)
    }

    setDescription(e){
        let newState = this.state
        newState.review.description = e.target.value
        this.setState(newState)
    }

    changeForm(){
        let newState = this.state;
        newState.form = 2;
        newState.review.trail_id = this.props.trail.id
        newState.review.user_id = this.props.user
        this.setState(newState)
    }

    activitySwitch(){
        let newState = this.state 
        newState.activitySwitch =  newState.activitySwitch === true ? false : true
        this.setState(newState)
    }

    dateSwitch() {
        let newState = this.state
        newState.dateSwitch = newState.dateSwitch === true ? false : true
        this.setState(newState)
    }

    setActivity(act){
        let newState = this.state 
        newState.review.activity = act;
        this.setState(newState)
        let a = document.getElementsByClassName("activity-dropdown")
        a[0].classList.add('no-hover')
        // debugger
    }

    render(){
        let options={
            size: 40,
            isHalf: false,
            edit: true,
        }
        let activityArr = ["Backpacking", "Bird watching", "Bike touring", "Camping", "Cross-country skiing", "Fishing", "Hiking", "Horseback riding", "Mountain biking", "Nature trips", "OHV/Off-road driving", "Paddle sports", "Road biking", "Rock climbing", "Scenic driving", "Snowshoeing", "Skiing", "Running", "Via ferrata", "Walking"]

        let {rating, description, activity, date} = this.state.review

        console.log(this.state)
        return(
            
            <div className="review-form-div">
                <div className="review-form-inner-div">
                    <div className="exit-modal-x" onClick={this.props.closeModal}>x</div>
                    <h1>{this.props.trail.name}</h1>
                    <h2>Step {this.state.form} of 2</h2>
                </div>
                {
                    this.state.form === 1 ? (
                        <div>
                            <div className="review-form-inner-div">
                                <div className="review-form-stars">
                                    <Stars options={options} onChange={this.setRating} value={rating} />
                                </div>
                                <div className="review-form-textarea">
                                    <textarea
                                        onChange={this.setDescription}
                                        value={description}
                                        cols="48"
                                        rows="7"
                                        placeholder="Give back to the community. Share your thoughts about the trail so others know what to expect."
                                    ></textarea>
                                </div>

                            </div>
                            <hr />
                            {
                                rating && description ? (
                                    <div onClick={this.changeForm} className="review-form-next-div-on"><span>Next</span></div >
                                ) : (
                                    <div className="review-form-next-div-off"><span>Next</span></div >

                                )
                            }
                        </div>
                    ) : (
                        <div>
                            <div className="review-form-inner-div1">
                                <div className="review-form-top-flex">
                                    <h3>Activity Type<span>*</span></h3>
                                    <div tabIndex="0" onFocus={this.activitySwitch} onBlur={this.activitySwitch} className="review-form-activity-div">
                                        <h4>{activity}</h4>
                                        <div >
                                            {
                                                this.state.activitySwitch === true ? <img className="flip" src={window.greenDropdown} /> : <img src={window.dropdown} />
                                            }
                                        </div>
                                                           
                                    </div>
                                        <div className={this.state.activitySwitch === true ? "activity-dropdown visible" : "activity-dropdown hidden"}>
                                            <ul>
                                                {
                                                    activityArr.map(act => {
                                                        return <li onClick={() => this.setActivity(act)} key={act}>{act}</li>
                                                    })
                                                }
                                            </ul>

                                        </div>
                                        <div tabIndex="0" onFocus={this.dateSwitch} onBlur={this.dateSwitch} className="review-form-date-div">
                                        <p>{date}</p>
                                            {
                                                this.state.dateSwitch === true ? <img className="flip" src={window.greenDropdown} /> : <img src={window.dropdown} />
                                            }
                                    </div>
                                </div>
                                

                            </div>

                        </div>
                    )
                }
                
                
            </div>
        )
    }
}

export default ReviewForm;