import React from "react";
import { connect } from "react-redux";
import { fetchTrail, fetchTrails } from "../../actions/trail_action";
import { fetchParks } from "../../actions/park_actions";
import Trail from "./trail";
import { fetchWeather } from "../../actions/weather_actions"
import { openModal } from "../../actions/modal_actions";
import {deleteReview} from "../../actions/review_actions"

const mSTP = (state, ownProps) => ({
    trails: Object.values(state.entities.trails).filter(trail => trail.park_id === state.entities.trails[ownProps.match.params.id].park_id),
    trail: state.entities.trails[ownProps.match.params.id],
    parks: state.entities.parks,
    weather: state.entities.weather,
    reviews: Object.values(state.entities.reviews).filter(review => state.entities.trails[ownProps.match.params.id].reviews.includes(review.id)),
    totalReviews: state.entities.reviews,
    currentUser: state.session.currentUserId
})

const mDTP = dispatch => ({
    fetchWeather: (coord) => dispatch(fetchWeather(coord)),
    openModal: (modal) => dispatch(openModal(modal)),
    fetchTrail: (trailId) => dispatch(fetchTrail(trailId)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
})

export default connect(mSTP, mDTP)(Trail)