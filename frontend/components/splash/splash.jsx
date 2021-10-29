import React from "react";
import NavbarContainer from "../navbar/navbar_container";
import Navbar from "../navbar/navbar";
import SearchbarContainer from "../searchbar/searchbar_container";
import Searchbar from "../searchbar/searchbar";


class Splash extends React.Component{

    render(){
        return(
            <div>
                <div>
                    <SearchbarContainer />
                </div>
                <div className="splash-stats-div">
                    <div className="splash-stats">
                        <h1>200k+</h1>
                        <h2>curated trails</h2>
                        <p>Discover unexpected gems, even in your own backyard.</p>
                    </div>
                    <div className="splash-stats">
                        <h1>25 mil</h1>
                        <h2>fellow explorers</h2>
                        <p>Share your adventures and learn from our global community.</p>
                    </div>
                    <div className="splash-stats">
                        <h1>214 mil</h1>
                        <h2>logged miles</h2>
                        <p>Navigate your way and keep a record of all your travels.</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Splash;