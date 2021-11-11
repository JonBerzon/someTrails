import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { createReview, receiveReview } from "../../actions/review_actions";
import { withRouter } from "react-router";
import { closeModal } from "../../actions/modal_actions";
import { fetchTrail } from "../../actions/trail_action";
import { createConditions } from "../../util/review_conditions_api_util";

const mSTP = (state, ownProps) => ({
    review: {
        user_id: null,
        trail_id: null,
        date: new Date().toString().slice(4, 15),
        description: "",
        rating: 0,
        activity: "Hiking"
    },
    review_conditions: [],
    formType: "create",
    trail: state.entities.trails[ownProps.location.pathname.slice(-1)],
    user: state.session.currentUserId
})

const mDTP = dispatch => ({
    action: review => dispatch(createReview(review)),
    action1: review => createConditions(review),
    closeModal: () => dispatch(closeModal()),
    fetchTrail: (trailId) => dispatch(fetchTrail(trailId)),
    receiveReview: review => dispatch(receiveReview(review))

})

export default withRouter(connect(mSTP,mDTP)(ReviewForm))