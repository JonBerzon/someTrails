import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../images/logo_only.png';


class Navbar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
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
                <div className="session-div">
                    <Link className="signup-button" to="/signup">Sign Up</Link>
                    <Link className="login-button" to="/login">Login</Link>
                </div>
            </div>
        )
    }
}

export default Navbar;