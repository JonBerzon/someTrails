import React from "react";



class Searchbar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            visisbilty: "hidden",
            search: ""
        }
        this.toTrail = this.toTrail.bind(this)
        this.toPark = this.toPark.bind(this)
        this.switchHidden = this.switchHidden.bind(this)
        this.setSearch = this.setSearch.bind(this)
    }

    componentDidMount(){
        this.props.fetchParks();
        this.props.fetchTrails();
    }

    toPark(id){
        console.log("topark")
        this.props.history.push(`/park/${id}`)
    }

    toTrail(id){
        console.log("totrail")
        this.props.history.push(`/trail/${id}`)
    }

    switchHidden(){
        this.setState({visisbilty: this.state.visisbilty === "hidden" ? "show" : "hidden"})
    }

    setSearch(e){
        this.setState({search: e.target.value})
    }

    render(){
        if (!this.props.trails || !this.props.parks) return null;
        return(
            <div>
                <div className="searchbar-div">
                    <p className="splash-text">Find your next trail</p>
                    <div className="fake-searchbar">
                        
                        <div className={this.state.visisbilty === "hidden" ? "searchbar-dropdown hidden" : "searchbar-dropdown" }>
                            <div className="searchbar-contents">
                                <hr />
                                {
                                    this.props.parks.map(park => {
                                        if (park.name.toLowerCase().startsWith(this.state.search.toLowerCase())){
                                            return (
                                                <div className="item-div">
                                                    <li onClick={() => this.toPark(park.id)} className="searchbar-item">
                                                        <div className="searchbar-item-img">
                                                            <img src={window.tree} />
                                                        </div>

                                                        <div className="searchbar-item-text">
                                                            <h1>{park.name}</h1>
                                                            <p>{park.state}, {park.country}</p>
                                                        </div>
                                                    </li>
                                                    <hr />
                                                </div>
                                            )
                                        }                                                           
                                    }
                                    )
                                }
                                {
                                    this.props.trails.map(trail => {
                                        if (trail.name.toLowerCase().startsWith(this.state.search.toLowerCase())) {
                                            return (
                                                <div className="item-div">
                                                    <li onClick={() => this.toTrail(trail.id)} className="searchbar-item">
                                                        <div className="searchbar-item-img">
                                                            <img src={window.flag} />
                                                        </div>
                                                        <div className="searchbar-item-text">
                                                            <h1>{trail.name}</h1>
                                                            <p>{trail.park.name}, {trail.park.state}, {trail.park.country}</p>
                                                        </div>
                                                    </li>
                                                    <hr />
                                                </div>
                                            )

                                        }

                                        
                                    }
                                    )
                                }
                            </div>
                        </div>



                        <div className="fake-searchbar1">
                            <img className="search-icon" src={window.blackSearch} />
                            <div className="arrow-circle-div">
                                <div className="arrow-div"></div>
                            </div>

                        </div>
                        <input onChange={this.setSearch} onFocus={this.switchHidden} onBlur={this.switchHidden} className="searchbar" type="text" placeholder="Search by city, park, or trail name" />



                    </div>
                  
                    
                    <img className="search-bg" src={window.searchBackground}/>
                </div>
            </div>
        )
    }


}

export default Searchbar;