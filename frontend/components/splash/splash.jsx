import React from "react";
import NavbarContainer from "../navbar/navbar_container";
import Navbar from "../navbar/navbar";
import SearchbarContainer from "../searchbar/searchbar_container";
import Searchbar from "../searchbar/searchbar";
import background from "../../../images/background.jpg"
import award from "../../../images/award.png"
import star from "../../../images/gstar3.png"


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
                {/* <div className="bottom-splash-background"></div> */}
                <div className="splash-bottom-div">
                    <h1 className="splash-bottom-h1">Explore with</h1>
                    <h2 className="splash-bottom-h2">confidence</h2>
                    <p className="splash-bottom-p">Inspiration and guidance for wherever your trail may lead.</p>
                    <p className="rating">4.9</p>
                    <img className="aa-award"src={award} alt="" />
                    <img className="gstar"src={star} alt="" />


                    <picture className="splash-bottom-pic">
                        <img className="splash-bottom-img" src={background} alt="" />
                    </picture>
                </div>
                
            </div>
        )
    }
}

export default Splash;