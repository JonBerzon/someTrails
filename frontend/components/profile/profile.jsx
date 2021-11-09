import React from "react";
import BasicHeader from "../reusable/basic_header";
import Stars from "../reusable/stars";


class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active: "profile"
        }
        this.setFocus = this.setFocus.bind(this)    
    }

    // componentDidMount(){
    //     if (this.props.currentProfile){
    //         this.setState({
    //             currentProfile: this.props.currentProfile
    //         })

    //     }
    // }

    // componentDidUpdate(prevProps){
    //     if (this.props.currentProfile !== prevProps.currentProfile) {
            
    //     }
    // }

    setFocus(type){
        this.setState({
            active: type
        })
    }

    render(){

        if (!this.props.currentProfile) return null;
        if (!this.props.currentProfile.created_at) return null;
        let { active} = this.state
        let { currentUser, currentProfile } = this.props
        let arr = ["Members", `${currentProfile.fname}`]
        // debugger
        let rating = 4;

        
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
                                    <img src={window.userIcon}/>
                                </div>          
                            </div>
                            <h1>Member Since</h1>
                            <p>{currentProfile.created_at.slice(0, 4)}</p>                            
                        </div>
                        <div className="profile-tab-user-info">
                            <h1>{currentProfile.fname +" "+ currentProfile.lname}</h1>
                            <h2>New York City, New York</h2>
                            <div>
                                <hr />
                            </div>
                            <h3>{currentProfile.bio}</h3>
                            <h4>Favorite Activities</h4>
                            
        

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile