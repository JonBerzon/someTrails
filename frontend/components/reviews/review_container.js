import { connect } from "react-redux";
import React from "react";
import Review from "./review";


const mSTP = (state, ownProps) => ({
    user: state.entities.users[ownProps.review.user_id],
    review: ownProps.review
})

const mDTP = dispatch => ({

})

export default connect(mSTP)(Review)