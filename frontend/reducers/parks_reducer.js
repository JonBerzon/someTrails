import { FETCH_ALL_PARKS, FETCH_PARK } from "../actions/park_actions";

const ParksReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = (Object.assign({}, state));
    switch (action.type) {
        case FETCH_ALL_PARKS:
            return action.parks;
        case FETCH_PARK:
            newState[action.park.id] = action.park;
            return newState;   
        default:
            return state;
    }

}

export default ParksReducer;