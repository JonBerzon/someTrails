import * as ReviewApiUtil from "../util/reviews_api_util"

export const RECEIVE_REVIEW = "RECEIVE_REVIEW"

export const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})


export const createReview = review => dispatch => {
    return ReviewApiUtil.createReview(review)
        // .then(review => dispatch(receiveReview(review)))
}

export const updateReview = review => dispatch => {
    return ReviewApiUtil.updateReview(review)
        .then(review => dispatch(receiveReview(review)))
}

export const deleteReview = reviewId => dispatch => {
    return ReviewApiUtil.deleteReview(reviewId)
        .then(review => dispatch(receiveReview(review)))
}