import React from "react";
import { connect } from "react-redux";
import { fetchTrails } from "../../actions/trail_action";
import { fetchParks } from "../../actions/park_actions";
import Trail from "./trail";
import { fetchWeather } from "../../actions/weather_actions"

const mSTP = (state, ownProps) => ({
    trails: Object.values(state.entities.trails).filter(trail => trail.park_id === state.entities.trails[ownProps.match.params.id].park_id),
    trail: state.entities.trails[ownProps.match.params.id],
    weather: state.entities.weather
})

const mDTP = dispatch => ({
    fetchTrails: () => dispatch(fetchTrails()),
    fetchWeather: (coord) => dispatch(fetchWeather(coord))
})

export default connect(mSTP, mDTP)(Trail)