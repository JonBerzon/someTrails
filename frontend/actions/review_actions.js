import * as ReviewApiUtil from "../util/reviews_api_util"

import { receiveTrail } from "./trail_action"

export const createReview = review => dispatch => {
    return ReviewApiUtil.createReview(review)
        .then(trail => dispatch(receiveTrail(trail)))
}

export const updateReview = review => dispatch => {
    return ReviewApiUtil.updateReview(review)
        .then(trail => dispatch(receiveTrail(trail)))
}

export const deleteReview = reviewId => dispatch => {
    return ReviewApiUtil.deleteReview(reviewId)
        .then(trail => dispatch(receiveTrail(trail)))
}