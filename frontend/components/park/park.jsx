import React from "react";
import BasicHeader from "../reusable/basic_header";


class Park extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            park: props.park,
            visibility: "visible"
        }
        this.changeVisibility=this.changeVisibility.bind(this)
    }

    componentDidMount(){
        this.props.fetchPark(this.props.match.params.id)
    }

    changeVisibility(){
        let oppo = this.state.visibility === "visible" ? "hidden" : "visible"
        this.setState({
            visibility: oppo
        })
    }

    render(){
        if (!this.props.park) return null;
        let { park } = this.props;
        let {country, state, name, description} = park;
        let oppoVisibility = this.state.visibility === "visible" ? "hidden" : "visible";

        let arr = [`${country}`, `${state}`, `${name}`]
        return(
            <div className="park-div">
                <hr />
                <BasicHeader arr={arr}/>
                <div className="park-image-header">
                    <img src={window.rmnp1} />
                    <img src={window.rmnp2} />
                    <img src={window.rmnp3} />
                </div>
                <div className="park-summary-div">
                    <h1>{`Best Trails in ${name}`}</h1>
                    <div className="park-reviews">
                        <img src={window.stars} alt="" />
                        <p>44,208 Reviews</p>
                    </div>
                    <h2 className={this.state.visibility}>{description.split(" ").slice(0, 40).join(" ")}<span>....</span></h2>
                    <h2 className={oppoVisibility}>{description}</h2>
                    <h3 className="park-show-text" onClick={this.changeVisibility}>{this.state.visibility === "visible" ? "Show more" : "Show less"}</h3>
                </div>
            </div>
        )
    }
}

export default Park;