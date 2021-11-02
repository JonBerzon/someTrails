import React from "react";
import BasicHeader from "../reusable/basic_header";


class Park extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            park: props.park
        }
    }

    componentDidMount(){
        this.props.fetchPark(this.props.match.params.id)
    }

    // componentDidUpdate(prevProps){
    //     if (this.props.park !== prevProps.park) {
    //         this.setState({
    //             park: this.props.park
    //         })
    //     }

    // }

    render(){
        if (!this.props.park) return null
        let { park } = this.props
        let {country, state, name} = park

        let arr = [`${country}`, `${state}`, `${name}`]
        return(
            <div>
                <hr />
                <BasicHeader arr={arr}/>
                <div className="park-image-header">

                </div>
            </div>
        )
    }
}

export default Park;