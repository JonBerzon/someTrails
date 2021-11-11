import React from "react";
import { Link } from "react-router-dom";

class UserDropdown extends React.Component{
    constructor(props){
        super(props)
    }

    redirectProfile(){
        this.props.history.push(`/profile/${this.props.userId}`)

    }

    render(){
        return(
            <div className="parent-icon-div">
                <div className="flex-user-icon">
                    <div className="user-icon-circle">
                        <img className="user-icon" src={window.userIcon}  />
                    </div>
                    <p>{this.props.fname}</p>
                </div>
                
                <ul className="icon-dropdown">  
                    {/* <li onClick={this.props.redirectProfile}>Profile</li>   */} {/* removed for presentation */}
                    <li onClick={this.props.handleLogout}>Logout</li>
                </ul>
            </div>
        )
    }
}

export default UserDropdown;