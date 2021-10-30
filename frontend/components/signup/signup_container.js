import { connect } from "react-redux";
import { withRouter } from "react-router";
import { clearSessionErrors, signup, login } from "../../actions/session_actions";
import Signup from "./signup";


const mSTP = state => ({
    user: {
        email:"",
        fname: "",
        lname: "",
        password: ""
    },
    errors: state.errors.session
})


const mDTP = dispatch => ({
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    clearErrors: ()=>dispatch(clearSessionErrors())
})

export default withRouter(connect(mSTP, mDTP)(Signup))