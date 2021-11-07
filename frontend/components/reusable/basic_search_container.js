import { connect } from "react-redux";
import { withRouter } from "react-router";
import {fetchParks} from "../../actions/park_actions"
import {fetchTrails} from "../../actions/trail_action"
import BasicSearch from "./basic_search";

const mSTP = state => ({
    parks: Object.values(state.entities.parks),
    trails: Object.values(state.entities.trails)
})

const mDTP = dispatch => ({
    fetchParks: () => dispatch(fetchParks()),
    fetchTrails: () => dispatch(fetchTrails())
})

export default withRouter(connect(mSTP,mDTP)(BasicSearch))