import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../images/logo_only.png';
import user from '../../../images/icons/human.png';
import UserDropdown from "./user_Dropdown";


class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this)
        // debugger
    }

    handleLogout(){
        // debugger
        this.props.logout(this.props.currentUser)
        // this.props.history.push("/")

    }

    render(){
        // debugger
        const icons = !this.props.currentUser ? (
            <div className="session-div">
                <Link className="signup-button" to="/signup">Sign Up</Link>
                <Link className="login-button" to="/login">Login</Link>
            </div>
        ) : (
            <div className="session1-div">
                <UserDropdown handleLogout={this.handleLogout} />
                {/* <img className="user-icon"src={user} handleLogout={this.handleLogout}/> */}
            </div>
        )
        return(
            <div className="navbar-div">
                <div className="left-div">
                    

                </div>
                <Link className="nav-link-home" to ="/">
                    <div className="logo-div">
                        <img src={logo} />
                        <p className="nav-title">SomeTrails</p>
                    </div>
                </Link>
                {icons}
                {/* <div className="session-div">
                    <Link className="signup-button" to="/signup">Sign Up</Link>
                    <Link className="login-button" to="/login">Login</Link>
                </div> */}
            </div>
        )
    }
}

export default Navbar;