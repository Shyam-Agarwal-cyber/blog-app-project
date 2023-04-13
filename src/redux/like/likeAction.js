import { FETCH_LIKES_FAIL, FETCH_LIKES_REQ, FETCH_LIKES_SUCC } from "./likeType"

export const fetchLikesReq = () => {
    return {
        type: FETCH_LIKES_REQ
    }
}
export const fetchLikesSucc = (likes) => {
    return {
        type: FETCH_LIKES_SUCC,
        payload: likes
    }
}
export const fetchLikesFail = (err) => {
    return {
        type: FETCH_LIKES_FAIL,
        payload: err
    }
}


export const fetchLikes = (id) => {
    return function (dispatch) {
        dispatch(fetchLikesReq())
        fetch(`http://localhost:3500/blogs/${id}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                const likes = data.likes
                dispatch(fetchLikesSucc(likes))
            }).catch((err) => {
                dispatch(fetchLikesFail(err))
            })
    }
}

