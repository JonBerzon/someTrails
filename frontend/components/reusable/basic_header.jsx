import React from "react";
import BasicSearch from "./basic_search";

class BasicHeader extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <div className="basic-header-div">
                    <div className="basic-header-flex-left">
                        {
                            this.props.arr.map((ele, index) => {
                                return <div key={ele} className="basic-header-flex-left">
                                    <div>{ele}</div>
                                    <div>{index < this.props.arr.length - 1 ? '>' : ""}</div>
                                </div>
                            })
                        }
                    </div>
                    <div>
                        <BasicSearch />
                    </div>
                </div>
                <hr className="smaller-hr"/>
            </div>
        )
    }
}

export default BasicHeader;





