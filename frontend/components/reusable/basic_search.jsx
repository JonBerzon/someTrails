import React from "react";

import search from "../../../images/search-icon-white.png"

class BasicSearch extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="flex-search-container">
                <div className="search-container">
                    <input 
                    type="text" 
                    placeholder="Enter a park or trail name" 
                    />
                </div>
                <div className="green-search-icon">
                    <img src={search}/>
                </div>
            </div>
        )
    }
}

export default BasicSearch;