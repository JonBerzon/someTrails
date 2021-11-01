import React from "react";
import BasicHeader from "../reusable/basic_header";
import BasicSearch from "../reusable/basic_search";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentProfile: null,
            active: null
        }
        this.setFocus = this.setFocus.bind(this)
        
    }

    componentDidMount(){
        this.props.fetchUsers();
    }

    componentDidUpdate(prevProps){
        if (this.props.currentProfile !== prevProps.currentProfile) {
            this.setState({
                currentProfile: this.props.currentProfile
            })
        }
    }

   

    setFocus(type){
        this.setState({
            active: type
        })

    }

    render(){
        let arr = ["Members", `${this.state.currentProfile ? this.state.currentProfile.fname : ""}`]
        return(
            <div className="profile-div">
                <hr />
                <BasicHeader arr={arr}/>
                <div className="profile-sub-header">
                    <h1 
                        onClick={() => this.setFocus("profile")}
                        className={this.state.active === "profile" ? "sub-focused" : ""}
                        >Profile</h1>
                    <h1 
                        onClick={() => this.setFocus("reviews")}
                        className={this.state.active === "reviews" ? "sub-focused" : ""}
                        >Reviews</h1>
                    <h1 
                        onClick={() => this.setFocus("photos")}
                        className={this.state.active === "photos" ? "sub-focused" : ""}
                        >Photos</h1>
                </div>
            </div>
        )
    }

}

export default Profile