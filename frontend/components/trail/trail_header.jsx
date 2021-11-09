import React from "react";


class TrailHeader extends React.Component{

    render(){
        let {trail, park} = this.props
        return(
            <div>
                <div className="trail-header">
                    <img src={trail.photosUrl[0]}/>
                    <div className="trail-picture-header-text">
                        <h1>{trail.name}</h1>
                        <div className="trail-picture-stats">
                            <h2 className={trail.difficulty}>{trail.difficulty}</h2>
                            <img src={window.stars}/>
                            <p>({trail.reviews.length})</p>
                        </div>
                        <h3>{park.name}</h3>
                    </div>
                </div>
                <div className="trail-mini-nav">
                    <div onClick={() => this.props.toPark(park.id)}>
                        <span className="outer-circle"><img src={window.park} /></span>
                        <p>Park</p>
                    </div>
                    <a target="_blank" href={trail.directions}>
                        <span className="outer-circle"><img src={window.direction} /></span>
                        <p>Directions</p>  
                    </a>
                    <div onClick={() => window.print()}>
                        <span className="outer-circle"><img src={window.printer} /></span>
                        <p>Print Page</p>
                    </div>
                    <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsometrails.herokuapp.com%2F%23%2F&amp;src=sdkpreparse">
                        <span className="outer-circle"><img src={window.share}/></span>
                        <p>Share</p>
                    </a>

                </div>
            </div>
        )
    }
}

export default TrailHeader;