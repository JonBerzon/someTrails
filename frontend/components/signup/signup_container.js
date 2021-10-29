import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
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
    signup: user => dispatch(signup(user))
})

export default connect(mSTP, mDTP)(Signup)