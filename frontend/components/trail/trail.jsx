import React from "react";
import BasicHeader from "../reusable/basic_header";
import { Link } from "react-router-dom";
import TrailHeader from "./trail_header";
import Map from "../map/map";
import TrailPreview from "./trail_preview";
import Weather from "../reusable/weather";
import Daylight from "../reusable/daylight";
import ReviewContainer from "../reviews/review_container";
import { faGrinTongueSquint } from "@fortawesome/free-solid-svg-icons";

class Trail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selected: "weather",
            selected2: "reviews"
        }
        this.toPark = this.toPark.bind(this)
        this.switchSelected = this.switchSelected.bind(this)
        this.switchSelected2 = this.switchSelected2.bind(this)
        this.toTrail = this.toTrail.bind(this)
        this.openModal = this.openModal.bind(this)
        this.deleteReview = this.deleteReview.bind(this)
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        if (this.props.trail){
            this.props.fetchWeather({
                lat: this.props.trail.latitude,
                long: this.props.trail.longitude
            })
        }
    }

    componentDidUpdate(prevProps){
        if (this.props.trail != prevProps.trail){
            this.props.fetchWeather({
                lat: this.props.trail.latitude,
                long: this.props.trail.longitude
            })
        }
    }
  
    switchSelected(type){
        this.setState({
            selected: type
        })
    }

    switchSelected2(type) {
        this.setState({
            selected2: type
        })
    }

    toPark(id){
        window.scrollTo(0, 0)
        this.props.history.push(`/park/${id}`)
    }

    toTrail(id){
        window.scrollTo(0, 0)
        this.props.history.push(`/trail/${id}`)
    }

    openModal(type){
        if (this.props.currentUser){
            this.props.openModal(type)
        } else {
            this.props.history.push("/login")
        }
    }

    deleteReview(id){
        this.props.deleteReview(id).then(resp => this.props.fetchTrail(resp.review))
        // this.props.deleteReview(id).then(resp => console.log(resp))

    }
   
    render() {
        if (!this.props.weather) return null;
        if (!this.props.trails) return null;
        if (!this.props.trail) return null; 
        if (!this.props.reviews) return null;
        if (!this.props.parks) return null;
        

        let { trail, weather, reviews } = this.props
        let park = this.props.parks[trail.park_id]
        let arr = [park.country, park.state, park.name, trail.name]
        // debugger
        
        let avgRating = 0;
        reviews.forEach(review => avgRating += review.rating);
        avgRating = avgRating / reviews.length;

        let sortedReviews = Object.values(reviews).reverse()

        return(
            <div className="trail-bg-color">
                <div className="trail-div">
                    <hr />
                    <BasicHeader arr={arr}/>
                    <TrailHeader trail={trail} park={park} toPark={this.toPark} reviews={this.props.reviews}/>
                </div>
                <div className="trail-lower-container">
                    <div className="trail-lower-left">
                        <div className="trail-description">{trail.description}<hr /></div>
                        <div className="trail-stats-div">
                            <div className="trail-stats">
                                <h1>Length</h1>
                                <h2>{trail.length}</h2>
                            </div>
                            <div className="trail-stats">
                                <h1>Elevation gain</h1>
                                <h2>{trail.elevation}</h2>
                            </div>
                            <div className="trail-stats">
                                <h1>Route type</h1>
                                <h2>{trail.route}</h2>
                            </div>
                        </div>
                        <div className="trail-descriptors">
                            {
                                trail.descriptors.map(desc => {
                                    return(
                                    <div key={desc} className="trail-descriptor-index">
                                        <h1>{desc}</h1>
                                    </div>
                                )})
                            }

                        </div>


                        <div className="weather-header-div">
                            <div className="weather-header">
                                <h1 onClick={() => this.switchSelected("weather")}
                                    className={this.state.selected === "weather" ? "trail-selected" : "trail-nonselected"}>
                                    Weather</h1>
                                <h1 onClick={() => this.switchSelected("daylight")}
                                    className={this.state.selected === "daylight" ? "trail-selected" : "trail-nonselected"}>
                                    Daylight</h1>
                            </div>
                            
                        </div>
                        {
                            this.state.selected === "weather" ? (
                                    <Weather weather={weather}/>
                            ) : (
                                    <Daylight weather={weather}/>  
                            )
                        }

                        <div className="weather-header-div">
                            <div className="weather-header">
                            <h1
                                onClick={() => this.switchSelected2("reviews")}
                                className={this.state.selected2 === "reviews" ? "trail-selected" : "trail-nonselected"}>
                                Reviews</h1>
                            {/* <h1
                                onClick={() => this.switchSelected2("photos")}
                                className={this.state.selected2 === "photos" ? "trail-selected" : "trail-nonselected"}>
                                Photos</h1> */} {/* removed for presentation */}
                            </div>
                            <div 
                            onClick={() => this.openModal({type: "create-review"})}
                            className={this.state.selected2 === "reviews" ? "weather-header-review" : "none"}>
                                Write a Review</div>
                        </div>
                        {
                            this.state.selected2 === "reviews" ? (
                                <div className="remove-hr">
                                    {
                                        sortedReviews.map(review =>{
                                            return <ReviewContainer key={review.id} review={review} deleteReview={this.deleteReview} openModal={this.openModal} currentUser={this.props.currentUser}/>
                                        })
                                    }
                                    
                                </div>
                            ) : (
                                <h1>photos</h1>
                            )
                        }
                    </div>
                    



                    <div className="trail-lower-right">
                        <div className="trail-map">
                            <Map
                                containerStyle={{
                                    width: '300px',
                                    height: '250px',
                                    borderRadius: '10px'
                                }}
                                center={{
                                    lat: trail.latitude,
                                    lng: trail.longitude
                                }}
                                zoom={17}
                                marker={{
                                    lat: trail.latitude,
                                    lng: trail.longitude
                                }}
                                defaultMapOptions = {{
                                    fullscreenControl: false,
                                    mapTypeControl: false,
                                    keyboardShortcuts: false
                                }}
                            />
                        </div>
                        <div className="trail-nearby">
                            <h1>Nearby trails</h1>
                            <div className="trail-nearby-flex"> 
                                {
                                    this.props.trails.map(trl =>{
                                        if (trl.id === trail.id){
                                            return ""
                                        } else {
                                            return (
                                                <div key={trl.id}>
                                                    <TrailPreview trail={trl} park={park} toTrail={this.toTrail} totalReviews={this.props.totalReviews} />
                                                    <br />
                                                </div>
                                            )
                                        }                       
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Trail;