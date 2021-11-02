import React from "react";



class Searchbar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div className="searchbar-div">
                    <p className="splash-text">Find your next trail</p>
                    <div className="fake-searchbar">
                        <img className="search-icon" src={window.blackSearch}/>
                        <div className="arrow-circle-div">
                            <div className="arrow-div"></div>
                        </div>
                    </div>
                    <input className="searchbar" type="text" placeholder="Search by city, park, or trail name"/>
                    {/* <div className="searchbar-background"></div> */}
                    <img className="search-bg" src={window.searchBackground}/>
                    {/* <img className="searchbar-background" src={background} /> */}
                </div>
            </div>
        )
    }


}

export default Searchbar;