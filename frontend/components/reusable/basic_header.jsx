import React from "react";
import BasicSearch from "./basic_search";

class BasicHeader extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {arr} = this.props
        return (
            <div>
                <div className="basic-header-div">
                    <div className="basic-header-flex-left">
                        {
                            arr.map((ele, index) => {
                                return <div key={ele} className="basic-header-flex-left">
                                    <div>{ele}</div>
                                    <div>{index < arr.length - 1 ? '>' : ""}</div>
                                </div>
                            })
                        }
                    </div>
                    <div className="basic-header-search">
                        <BasicSearch />
                    </div>
                </div>
                <hr className="smaller-hr"/>
            </div>
        )
    }
}

export default BasicHeader;





