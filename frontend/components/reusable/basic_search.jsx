import React from "react";


class BasicSearch extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selected: false,
            search: ""
        }
        this.toTrail = this.toTrail.bind(this)
        this.toPark = this.toPark.bind(this)
        this.setSearch = this.setSearch.bind(this)
        this.switchSelected = this.switchSelected.bind(this)

    }


    toPark(id) {
        this.props.history.push(`/park/${id}`)
    }

    toTrail(id) {
        this.props.history.push(`/trail/${id}`)
    }

    setSearch(e) {
        this.setState({ search: e.target.value })
    }

    switchSelected(){
        this.setState({selected: this.state.selected === false ? true : false})
    }


    render(){
        if (!this.props.trails || !this.props.parks) return null;
       
        return(
            <div className="flex-search-container">
                <div className={this.state.selected === true ? "search-container search-flattened" : "search-container"}>
                    <input
                    onFocus={this.switchSelected}
                    onBlur={this.switchSelected}
                    onChange={this.setSearch}
                    type="text" 
                    placeholder="Enter a park or trail name" 
                    />
                    <div className="basic-search-dropdown">
                        {
                            Object.values(this.props.parks).map(park => {
                                if (park.name.toLowerCase().startsWith(this.state.search.toLowerCase())) {
                                    return (
                                        <div key={park.id} className="basic-search-item-div">
                                            <li onClick={() => this.toPark(park.id)} className="basic-search-item">
                                                <div className="basic-search-park-wrap">
                                                    <img src={window.orangeTree} />
                                                </div>

                                                <div className="basic-search-text">
                                                    <h1>{park.name}</h1>
                                                    <p>{park.state}</p>
                                                </div>
                                            </li>
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
                                        <div key={trail.id} className="">
                                            <li onClick={() => this.toTrail(trail.id)} className="basic-search-item">
                                                <div className="basic-search-trail-wrap">
                                                    <img src={window.flag} />
                                                </div>
                                                <div className="basic-search-text">
                                                    <h1>{trail.name}</h1>
                                                    <p>{this.props.parks[trail.park_id].name}, {this.props.parks[trail.park_id].state}</p>
                                                </div>
                                            </li>
                                        </div>
                                    )

                                }


                            }
                            )
                        }



                    </div>
                </div>
                <div className={this.state.selected === true ? "green-search-icon search-flattened" : "green-search-icon"}>
                    <img src={window.whiteSearch}/>
                </div>
            </div>
        )
    }
}

export default BasicSearch;


