import { FETCH_ALL_TRAILS, FETCH_TRAIL } from "../actions/trail_action";

const TrailsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = (Object.assign({}, state))
    switch (action.type) {
        case FETCH_ALL_TRAILS:
            return action.trails;
        case FETCH_TRAIL:
            newState[action.trail.id] = action.trail
            return newState;
        default:
            return state;
    }
}

export default TrailsReducer;