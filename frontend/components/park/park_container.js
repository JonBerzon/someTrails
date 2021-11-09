import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchParks } from "../../actions/park_actions";
import { fetchTrails } from "../../actions/trail_action";
import Park from "./park";

const mSTP = (state, ownProps) => ({
    park: state.entities.parks[ownProps.match.params.id],
    trails: state.entities.trails,
    reviews: Object.values(state.entities.reviews).filter(review => state.entities.parks[ownProps.match.params.id].trails.includes(review.trail_id))
})



export default  withRouter(connect(mSTP)(Park))