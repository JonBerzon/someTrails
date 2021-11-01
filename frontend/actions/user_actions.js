import * as UserApiUtil from "../util/user_api_util"

export const FETCH_ALL_USERS = "FETCH_ALL_USERS"

const receiveAllUsers = users => ({
    type: FETCH_ALL_USERS,
    users
})


export const fetchUsers = () => dispatch => {
    return UserApiUtil.fetchUsers()
        .then(users => dispatch(receiveAllUsers(users)))
}