import React from "react";
import { connect } from "react-redux";
import { fetchPark } from "../../actions/park_actions";
import { fetchTrails } from "../../actions/trail_action";
import Park from "./park";

const mSTP = (state, ownProps) => ({
    park: state.entities.parks[ownProps.match.params.id],
    trails: Object.values(state.entities.trails)
})

const mDTP = dispatch => ({
    fetchPark: parkId => dispatch(fetchPark(parkId)),
    fetchTrails: () => dispatch(fetchTrails())
})

export default connect(mSTP, mDTP)(Park)