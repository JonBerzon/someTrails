import Searchbar from "./searchbar"
import React from "react"
import { connect } from "react-redux"
import { fetchTrails } from "../../actions/trail_action"
import { fetchParks } from "../../actions/park_actions"
import { withRouter } from "react-router"

const mSTP = state => ({
    trails: Object.values(state.entities.trails),
    parks: Object.values(state.entities.parks)
})

const mDTP = dispatch => ({
    fetchTrails: () => dispatch(fetchTrails()),
    fetchParks: () => dispatch(fetchParks())

})

export default withRouter(connect(mSTP, mDTP)(Searchbar))