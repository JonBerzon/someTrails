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


    toPark(id){
        this.props.history.push(`/park/${id}`)
    }

    toTrail(id){
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
        // debugger
        return(
            <div>
                <div className="searchbar-div">
                    <p className="splash-text">Find your next trail</p>
                    <div className="fake-searchbar">
                        
                        <div className={this.state.visisbilty === "hidden" ? "searchbar-dropdown hidden" : "searchbar-dropdown" }>
                            <div className="searchbar-contents">
                                <hr />
                                {
                                    Object.values(this.props.parks).map(park => {
                                        if (park.name.toLowerCase().startsWith(this.state.search.toLowerCase())){
                                            return (
                                                <div key={park.id} className="item-div">
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
                                    Object.values(this.props.trails).map(trail => {
                                        if (trail.name.toLowerCase().startsWith(this.state.search.toLowerCase())) {
                                            return (
                                                <div key={trail.id} className="item-div">
                                                    <li onClick={() => this.toTrail(trail.id)} className="searchbar-item">
                                                        <div className="searchbar-item-img">
                                                            <img src={window.flag} />
                                                        </div>
                                                        <div className="searchbar-item-text">
                                                            <h1>{trail.name}</h1>
                                                            <p>{this.props.parks[trail.park_id].name}, {this.props.parks[trail.park_id].state}, {this.props.parks[trail.park_id].country}</p>
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