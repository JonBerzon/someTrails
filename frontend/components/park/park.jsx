import React from "react";
import BasicHeader from "../reusable/basic_header";
import Map from "../map/map";
import ParkTrail from "../park_trail/park_trail";
import Stars from "../reusable/stars";


class Park extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            park: props.park,
            visibility: "visible"
        }
        this.changeVisibility=this.changeVisibility.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

   

    


    changeVisibility(){
        let oppo = this.state.visibility === "visible" ? "hidden" : "visible"
        this.setState({
            visibility: oppo
        })
    }

    handleClick(e){
        this.props.history.push(`/trail/${e}`)
    }

    render(){
        if (!this.props.park) return null;
        if (this.props.trails.length === 0) return null;
        let { park } = this.props;
        let {country, state, directions, name, description, acreage, latitude, longitude, zoom, contact} = park;
        let oppoVisibility = this.state.visibility === "visible" ? "hidden" : "visible";
        let { trails } = this.props

        let numReviews = 0
        Object.values(trails).forEach(trail => numReviews += trail.reviews.length )
        let arr = [`${country}`, `${state}`, `${name}`]

        let options = {
            size:17,
            isHalf: true,
            edit: false
        }
        let avgRating = 0;
        let count = 0;
        this.props.reviews.forEach( review => {
            count += 1;
            avgRating += review.rating;
        })
        avgRating = avgRating / count;




        return(
            <div className="park-div">
                <hr />
                <BasicHeader arr={arr}/>
                <div className="park-image-header">
                    <img onClick={() => this.handleClick(Object.values(trails)[0].id)} src={Object.values(trails)[0].photosUrl[0]} />
                    <img onClick={() => this.handleClick(Object.values(trails)[1].id)} src={Object.values(trails)[1].photosUrl[0]} />
                    <img onClick={() => this.handleClick(Object.values(trails)[2].id)} src={Object.values(trails)[2].photosUrl[0]} />
                    
                </div>
                <div className="park-summary-div">
                    <h1>{`Best Trails in ${name}`}</h1>
                    <div className="park-reviews">
                        <div className="park-stars">
                            <Stars options={options} rating={avgRating}/>
                        </div>
                        {/* <img src={window.stars} alt="" /> */}
                        <p>{numReviews} Reviews</p>
                    </div>
                    <h2 className={this.state.visibility}>{description.split(" ").slice(0, 40).join(" ")}<span>....</span></h2>
                    <h2 className={oppoVisibility}>{description}</h2>
                    <h3 className="park-show-text" onClick={this.changeVisibility}>{this.state.visibility === "visible" ? "Show more" : "Show less"}</h3>
                </div>
                <Map 
                    containerStyle = {{
                        width: '90vw',
                        height: '300px',
                        borderRadius: '10px',
                        maxWidth: '750px'
                    }}
                    center = {{
                        lat: latitude,
                        lng: longitude
                    }}
                    zoom = {zoom}                         
                />
                <div className="park-links-div">
                    <a target="_blank" href={directions}>
                        <div className="park-link">
                            <div>
                                <img src={window.direction}/>
                            </div>
                            <p>Directions</p>
                        </div>
                    </a>
                    <div className="park-link">
                        <div>
                            <img onClick={() => window.print()} src={window.printer} />
                        </div>
                        <p>Print page</p>
                    </div>
                    <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsometrails.herokuapp.com%2F%23%2F&amp;src=sdkpreparse">
                    <div className="park-link">
                        <div><img src={window.share} /></div>
                        <p>Share</p>
                    </div>
                    </a>
                </div>
                <hr />
                <div className="park-info-div">
                    <div className="park-info-left">
                        <h1>Park information</h1>
                        <h2>Acreage:</h2>
                        <p>{acreage} acres</p>
                    </div>
                    <div className="park-info-right">
                        <h2>Contact:</h2>
                        <p>{contact}</p>
                    </div>
                </div>
                <div className="park-bottom-trails">
                    <h1 >Top Trails (222)</h1>
                    {Object.values(trails).map((trail, idx)=>{
                        return (
                            <div key={ trail.id }>
                                <ParkTrail handleClick={this.handleClick} trail={trail} idx={idx} park={park} reviews={this.props.reviews}/>
                                <br />
                            </div>
                        )
                    })}
                </div>                 
            </div>
        )
    }
}

export default Park;