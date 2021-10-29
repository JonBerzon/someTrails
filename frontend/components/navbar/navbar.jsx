import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.png';


class Navbar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="navbar-div">
                <div className="left-div">
                    

                </div>
                <div className="logo-div">
                    <img src={logo} />
                </div>
                <div className="session-div">
                    <a className="signup-button" href="#">Sign Up</a>
                    <a className="login-button" href="#">Log In</a>
                </div>
            </div>
        )
    }
}

export default Navbar;