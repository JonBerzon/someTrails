import Searchbar from "./searchbar"
import React from "react"
import { connect } from "react-redux"
import { fetchTrails } from "../../actions/trail_action"
import { fetchParks } from "../../actions/park_actions"
import { withRouter } from "react-router"

const mSTP = state => ({
    trails: state.entities.trails,
    parks: state.entities.parks
})

const mDTP = dispatch => ({
    fetchParks: () => dispatch(fetchParks())

})

export default withRouter(connect(mSTP, mDTP)(Searchbar))