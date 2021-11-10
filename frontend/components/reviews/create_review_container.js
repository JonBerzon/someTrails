import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { createReview } from "../../actions/review_actions";
import { withRouter } from "react-router";
import { closeModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => ({
    formType: "create",
    trail: state.entities.trails[ownProps.location.pathname.slice(-1)],
    user: state.session.currentUserId
})

const mDTP = dispatch => ({
    action: review => dispatch(createReview(review)),
    closeModal: () => dispatch(closeModal())

})

export default withRouter(connect(mSTP,mDTP)(ReviewForm))