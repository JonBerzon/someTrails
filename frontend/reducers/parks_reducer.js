import { FETCH_PARK, FETCH_PAYLOAD } from "../actions/park_actions";

const ParksReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = (Object.assign({}, state));
    switch (action.type) {
        case FETCH_PAYLOAD:
            return action.payload.parks;
        case FETCH_PARK:
            newState[action.park.id] = action.park;
            return newState;   
        default:
            return state;
    }

}

export default ParksReducer;