import React from "react"
import { connect } from "react-redux"
import { logout } from "../../actions/session_actions"
import Navbar from "./navbar"
import { withRouter } from "react-router"
import { fetchParks } from "../../actions/park_actions"


// const mSTP = state => ({
//    currentUser: state.session.currentUserId,
//    fName: state.entities.users[state.session.currentUserId].fname,
// })
const mSTP = state => {
    switch (state.session.currentUserId) {
        case undefined:
            return{
                currentUser: null,
                fName: null
            }
        default:
            return{
                currentUser: state.session.currentUserId,
                fName: state.entities.users[state.session.currentUserId].fname
            }
    }
    
}



const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchParks: () => dispatch(fetchParks())
})

export default withRouter(connect(mSTP,mDTP)(Navbar))