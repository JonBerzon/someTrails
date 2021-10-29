import { connect } from "react-redux";
import { clearSessionErrors, login } from "../../actions/session_actions";
import Login from "./login";

const mSTP = state =>({
    user: {
        email: "",
        password: ""
    },
    errors: state.errors.session
})

const mDTP = dispatch => ({
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearSessionErrors())
})

export default connect(mSTP,mDTP)(Login)