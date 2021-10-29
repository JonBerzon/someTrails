import Searchbar from "./searchbar"
import React from "react"
import { connect } from "react-redux"

const mSTP = state => ({
    hikes: ["hike"],
    parks: ["park"]
})

const mDTP = dispatch => {

}

export default connect(mSTP)(Searchbar)