import { FETCH_PAYLOAD } from "../actions/park_actions";

const ReviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case FETCH_PAYLOAD:
            return action.payload.reviews
        default:
            return state;
    }
}

export default ReviewsReducer;