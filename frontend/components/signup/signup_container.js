import { connect } from "react-redux";
import { clearSessionErrors, signup } from "../../actions/session_actions";
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
    clearErrors: ()=>dispatch(clearSessionErrors())
})

export default connect(mSTP, mDTP)(Signup)