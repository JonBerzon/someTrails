import React from "react"
import { connect } from "react-redux"
import { logout } from "../../actions/session_actions"
import Navbar from "./navbar"
import { withRouter } from "react-router"


const mSTP = state => ({
   currentUser: state.session.currentUserId
})
// debugger
const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default withRouter(connect(mSTP,mDTP)(Navbar))