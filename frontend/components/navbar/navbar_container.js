import React from "react"
import { connect } from "react-redux"
import Navbar from "./navbar"


const mSTP = state => ({
    hikes: ["hike"],
    parks: ["park"]
})

const mDTP = dispatch => {
    
}

export default connect(mSTP)(Navbar)