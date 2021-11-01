import React from "react";
import BasicHeader from "../reusable/basic_header";
import human from "../../../images/icons/human6.png"

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentProfile: null,
            active: "profile"
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
        // debugger
    }

   

    setFocus(type){
        this.setState({
            active: type
        })

    }

    render(){
        let arr = ["Members", `${this.state.currentProfile ? this.state.currentProfile.fname : ""}`]
        const {currentProfile, active} = this.state
        const {currentUser} = this.props
        return(
            <div className="profile-div">
                <hr />
                <BasicHeader arr={arr}/>
                <div className="profile-sub-header">
                    <h1 
                        onClick={() => this.setFocus("profile")}
                        className={active === "profile" ? "sub-focused" : ""}
                        >Profile</h1>
                    <h1 
                        onClick={() => this.setFocus("reviews")}
                        className={active === "reviews" ? "sub-focused" : ""}
                        >Reviews</h1>
                    <h1 
                        onClick={() => this.setFocus("photos")}
                        className={active === "photos" ? "sub-focused" : ""}
                        >Photos</h1>
                </div>
                <div className="profile-tab">
                    <div className="profile-tab-header">
                       <p>Profile</p> 
                       <button className={currentProfile !== currentUser ? "hide" : ""}>
                           Edit Profile
                        </button>
                    </div>
                    <div className="profile-tab-outer-flex">
                        <div className="profile-tab-inner-flex">
                            <div className="profile-tab-outerframe">
                                <div className="profile-tab-frame">
                                    <img src={human}/>
                                </div>
                                
                            </div>
                            <h1>Member Since</h1>
                            <p>{currentProfile ? currentProfile.created_at.slice(0, 4) : ""}</p>

                            
                        </div>
                        <div className="profile-tab-user-info">
                            <h1>{currentProfile ? currentProfile.fname +" "+ currentProfile.lname: ""}</h1>
                            <h2>New York City, New York</h2>
                            <div>
                                <hr />
                            </div>
                            <h3>{currentProfile ? currentProfile.bio : ""}</h3>
                            <h4>Favorite Activities</h4>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default Profile