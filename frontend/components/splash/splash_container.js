import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/user_actions";
import { fetchParks } from "../../actions/park_actions";
import Splash from "./splash";
import { fetchTrails } from "../../actions/trail_action";


const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchParks: () => dispatch(fetchParks()),
    fetchTrails: () => dispatch(fetchTrails())
})

export default connect(null, mDTP)(Splash)