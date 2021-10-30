import React from "react";
import user from '../../../images/icons/human.png';

class UserDropdown extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="parent-icon-div">
                <img className="user-icon" src={user}  />
                <p>{}</p>
                <ul className="icon-dropdown">
                    <li>Profile</li>
                    <li onClick={this.props.handleLogout}>Logout</li>
                </ul>
            </div>
        )
    }
}

export default UserDropdown;