import { FETCH_LIKES_FAIL, FETCH_LIKES_REQ, FETCH_LIKES_SUCC } from './likeType'

const initialState = {
    loading: false,
    likes: null,
    err: ''
}

const likeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LIKES_REQ:
            return {
                ...state,
                loading: true
            }

        case FETCH_LIKES_SUCC:
            return {
                loading: false,
                likes: action.payload,
                err: ''
            }

        case FETCH_LIKES_FAIL:
            return {
                loading: false,
                likes: null,
                err: action.payload
            }

        default: return state
    }
}

export default likeReducer