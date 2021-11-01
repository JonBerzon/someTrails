import React from "react";
import SearchbarContainer from "../searchbar/searchbar_container";


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
                    <div className="bottom-splash-award">
                        <div>
                            <img className="aa-award"src={window.award} alt="" />
                        </div>
                        <p className="rating">4.9</p>
                        <div>
                            <img className="gstar"src={window.stars} alt="" />
                        </div>
                    </div>


                    <picture className="splash-bottom-pic">
                        <img className="splash-bottom-img" src={window.bottomSplashBackground} alt="" />
                    </picture>
                </div>
                
            </div>
        )
    }
}

export default Splash;