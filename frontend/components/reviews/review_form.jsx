import React from "react";
import Stars from "../reusable/stars"

class ReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            review: this.props.review,
            review_conditions: this.props.review_conditions,
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
        this.switchCondition = this.switchCondition.bind(this)
        this.sendAction = this.sendAction.bind(this)
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
        newState.form = newState.form === 1 ? 2 : 1;
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

    switchCondition(cond){
        let newState = this.state 
        if (newState.review_conditions.includes(cond)){
            let idx = newState.review_conditions.indexOf(cond)
            newState.review_conditions.splice(idx, 1);
        } else {
            newState.review_conditions.push(cond)
        }
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

    sendAction(){
        let conditionsArr = ["Great!", "Blowdown", "Bridge out", "Bugs", "Closed", "Fee", "Flooded", "Icy", "Muddy", "No shade", "Off trail", "Overgrown", "Private property", "Rocky", "Scramble", "Snow", "Washed out"]
        let conditions = this.state.review_conditions.map(cond => conditionsArr.indexOf(cond) + 1)
        if (this.props.formType === "edit"){
            this.props.action(this.state.review).then(resp => this.props.action1({ c: conditions, r: this.props.review.id })).then(resp => this.props.receiveReview(resp)).then(resp => this.props.fetchTrail(resp.review.trail_id))
        } else {
            this.props.action(this.state.review).then(resp => this.props.action1({ c: conditions, r: resp.id })).then(resp => this.props.receiveReview(resp)).then(resp => this.props.fetchTrail(resp.review.trail_id))

        }
        this.props.closeModal()
    }

    componentWillUnmount(){
        console.log(this.props.review_conditions)
        this.setState({
            review: this.props.review,
            review_conditions: this.props.review_conditions
        })
        
    }

    render(){
        let options={
            size: 40,
            isHalf: false,
            edit: true,
        }
        let activityArr = ["Backpacking", "Bird watching", "Bike touring", "Camping", "Cross-country skiing", "Fishing", "Hiking", "Horseback riding", "Mountain biking", "Nature trips", "OHV/Off-road driving", "Paddle sports", "Road biking", "Rock climbing", "Scenic driving", "Snowshoeing", "Skiing", "Running", "Via ferrata", "Walking"]
        let conditionsArr = ["Great!", "Blowdown", "Bridge out", "Bugs", "Closed", "Fee", "Flooded", "Icy", "Muddy", "No shade", "Off trail", "Overgrown", "Private property", "Rocky", "Scramble", "Snow", "Washed out"]

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
                                        <div className="review-form-filler"></div>
                                        <div tabIndex="0" onFocus={this.dateSwitch} onBlur={this.dateSwitch} className="review-form-date-div">
                                        <p>{date}</p>
                                            {
                                                this.state.dateSwitch === true ? <img className="flip" src={window.greenDropdown} /> : <img src={window.dropdown} />
                                            }
                                    </div>
                                </div>
                                <hr className="review-hr"/>
                                <div className="review-form-trail-conditions">
                                    <h1>Trail Conditions<span>*</span></h1>
                                    <div className="review-form-conditions-index">
                                        {
                                            conditionsArr.map((cond, idx) =>{
                                                return(
                                                    <div className="condition-index-wrapper" key={idx}> 
                                                        <li 
                                                        className={this.state.review_conditions.includes(cond) ? "condition-index-selected" : "condition-index-deselected"}
                                                        onClick={() => this.switchCondition(cond)}
                                                        >{cond}</li>
                                                    </div>
                                            )})
                                        }
                                    </div>
                                </div>
                            </div>
                            <hr id="review-form-bottom-hr"/>
                            <div className="review-form-bottom-buttons">
                                <p onClick={this.changeForm}>Back</p>
                                <span onClick={this.sendAction}>Post</span>
                            </div>
                        </div>
                    )
                }         
            </div>
        )
    }
}

export default ReviewForm;