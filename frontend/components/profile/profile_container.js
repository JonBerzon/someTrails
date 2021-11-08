import { connect } from "react-redux";
import React from "react";
import Profile from "./profile";
import { fetchUsers } from "../../actions/user_actions";

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.currentUserId],
    currentProfile: state.entities.users[ownProps.match.params.id]


})

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())

})

export default connect(mSTP)(Profile)