import * as ParkApiUtil from "../util/park_api_util"

export const FETCH_ALL_PARKS = "FETCH_ALL_PARKS"
export const FETCH_PARK = "FETCH_PARK"

const receiveAllParks = parks => ({
    type: FETCH_ALL_PARKS,
    parks
})

const receivePark = park => ({
    type: FETCH_PARK,
    park
})

export const fetchParks = () => dispatch => {
    return ParkApiUtil.fetchParks()
        .then(parks => dispatch(receiveAllParks(parks)))
}

export const fetchPark = parkId => dispatch => {
    return ParkApiUtil.fetchPark(parkId)
        .then(park => dispatch(receivePark(park)))
}