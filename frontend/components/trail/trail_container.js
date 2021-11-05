import React from "react";
import { connect } from "react-redux";
import { fetchTrails } from "../../actions/trail_action";
import { fetchParks } from "../../actions/park_actions";
import Trail from "./trail";

const mSTP = (state, ownProps) => ({
    trails: Object.values(state.entities.trails).filter(trail => trail.park_id === state.entities.trails[ownProps.match.params.id].park_id),
    trail: state.entities.trails[ownProps.match.params.id],
    // parks: state.entities.parks
})

const mDTP = dispatch => ({
    fetchTrails: () => dispatch(fetchTrails()),
    // fetchParks: () => dispatch(fetchParks())
})

export default connect(mSTP, mDTP)(Trail)