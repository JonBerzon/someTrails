import React from "react";
import BasicSearchContainer from "./basic_search_container";

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
                        <BasicSearchContainer />
                    </div>
                </div>
                <hr className="smaller-hr"/>
            </div>
        )
    }
}

export default BasicHeader;





