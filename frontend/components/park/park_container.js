import React from "react";
import { connect } from "react-redux";
import { fetchPark } from "../../actions/park_actions";
import Park from "./park";

const mSTP = (state, ownProps) => ({
    park: state.entities.parks[ownProps.match.params.id]
})

const mDTP = dispatch => ({
    fetchPark: parkId => dispatch(fetchPark(parkId))
})

export default connect(mSTP, mDTP)(Park)