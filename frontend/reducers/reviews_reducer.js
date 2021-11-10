import { FETCH_PAYLOAD } from "../actions/park_actions";
import { RECEIVE_REVIEW } from "../actions/review_actions";

const ReviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    
    switch (action.type) {
        case FETCH_PAYLOAD:
            return action.payload.reviews
        case RECEIVE_REVIEW:
            newState[action.review.id] = action.review
            return newState;
        default:
            return state;
    }
}

export default ReviewsReducer;