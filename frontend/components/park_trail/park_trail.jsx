import React from "react";

class ParkTrail extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="park-trail-div">
                <img src={window.rmnp1} alt="" />
                <div className="park-trail-info">
                    <h1>#1 - Emerald Lake Trail</h1>
                    <h2>Rocky Mountain National Park</h2>
                    <div className="park-trail-difficulty-div">
                        <span>moderate</span>
                        <img src={window.stars}/>
                        <p>(3214)</p>
                    </div>
                    <div className="park-trail-length-div">
                        <h3>Length: 5.4 mi</h3>
                        <span>&#8226;</span>
                        <h3>Est. 1 h 46 m</h3>
                    </div>
                    <div className="park-trail-bottom-text">
                        <h4>Emerald Lake Trail is a 3.2 mile heavily trafficked out and back trail located near Estes Park,
                            Colorado that features a lake and is rated as moderate. The trail is primarily used for hiking and snowshoeing and is best used from
                            June until October.</h4>
                        <h5>Show More</h5>
                    </div>
                    
                </div>

            </div>
        )
    }
}

export default ParkTrail;