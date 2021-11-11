import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { createReview, receiveReview, updateReview } from "../../actions/review_actions";
import { withRouter } from "react-router";
import { closeModal } from "../../actions/modal_actions";
import { fetchTrail } from "../../actions/trail_action";
import { createConditions, updateConditions } from "../../util/review_conditions_api_util";

const mSTP = (state, ownProps) => {
    let test = ownProps.review.conditions.slice()
    // debugger
    return{
    review: {
        id: ownProps.review.id,
        user_id: ownProps.review.user_id,
        trail_id: ownProps.review.trail_id,
        date: ownProps.review.date,
        description: ownProps.review.description,
        rating: ownProps.review.rating,
        activity: ownProps.review.activity
    },

    review_conditions: test,
    formType: "edit",
    trail: state.entities.trails[ownProps.review.trail_id],
    user: state.session.currentUserId
}
}

const mDTP = dispatch => ({
    action: review => dispatch(updateReview(review)),
    action1: review => updateConditions(review),
    closeModal: () => dispatch(closeModal()),
    fetchTrail: (trailId) => dispatch(fetchTrail(trailId)),
    receiveReview: review => dispatch(receiveReview(review))

})

export default withRouter(connect(mSTP, mDTP)(ReviewForm))