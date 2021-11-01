import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../images/logo_only.png';
import UserDropdown from "./user_Dropdown";


class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this)
        this.redirectProfile = this.redirectProfile.bind(this)

    }

    handleLogout(){
        this.props.logout(this.props.currentUser)

    }

    redirectProfile() {
        this.props.history.push(`/profile/${this.props.currentUser}`)
    }

    render(){
        const icons = !this.props.currentUser ? (
            <div className="session-div">
                <Link className="signup-button" to="/signup">Sign Up</Link>
                <Link className="login-button" to="/login">Login</Link>
            </div>
        ) : (
            <div className="session1-div">
                <UserDropdown handleLogout={this.handleLogout} fname={this.props.fName} redirectProfile={this.redirectProfile} />
            </div>
        )
        return(
            <div className="navbar-div">
                <div className="navbar-left-div">
                    

                </div>
                <Link className="nav-link-home" to ="/">
                    <div className="logo-div">
                        <img src={logo} />
                        <p className="nav-title">SomeTrails</p>
                    </div>
                </Link>
                {icons}
            </div>
        )
    }
}

export default Navbar;