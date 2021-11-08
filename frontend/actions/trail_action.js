import * as TrailApiUtil from "../util/trail_api_util"

export const FETCH_ALL_TRAILS = "FETCH_ALL_TRAILS"
export const FETCH_TRAIL = "FETCH_TRAIL"

const receiveAllTrails = trails => ({
    type: FETCH_ALL_TRAILS,
    trails
})

export const receiveTrail = trail => ({
    type: FETCH_TRAIL,
    trail
})

export const fetchTrails = () => dispatch => {
    return TrailApiUtil.fetchTrails()
        .then(trails => dispatch(receiveAllTrails(trails)))
}

export const fetchTrail = (trailId) => dispatch => {
    return TrailApiUtil.fetchTrail(trailId)
        .then(trail => dispatch(receiveTrail(trail)))
}