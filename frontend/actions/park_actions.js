import * as ParkApiUtil from "../util/park_api_util"

// export const FETCH_ALL_PARKS = "FETCH_ALL_PARKS"
export const FETCH_PAYLOAD = "FETCH_PAYLOAD"
export const FETCH_PARK = "FETCH_PARK"

const receiveAllParks = payload => ({
    type: FETCH_PAYLOAD,
    payload
})

const receivePark = park => ({
    type: FETCH_PARK,
    park
})

export const fetchParks = () => dispatch => {
    return ParkApiUtil.fetchParks()
        .then(payload => dispatch(receiveAllParks(payload)))
}

export const fetchPark = parkId => dispatch => {
    return ParkApiUtil.fetchPark(parkId)
        .then(park => dispatch(receivePark(park)))
}