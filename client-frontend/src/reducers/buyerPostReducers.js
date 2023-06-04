import { buyerPostConsts } from "../actions/constants"

const initState = {
    buyerPosts: [],
    loading: false,
}

export default (state = initState, action) => {
    switch (action.type) {
        case buyerPostConsts.BUYER_POST_FETCH_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case buyerPostConsts.BUYER_POST_FETCH_SUCCESS:
            state = {
                ...state,
                buyerPosts: action.payload,
                loading: false
            }
            break;
        case buyerPostConsts.BUYER_POST_FETCH_FAILED:
            state = {
                ...state,
                loading: false
            }
            break;
    }

    return state
}