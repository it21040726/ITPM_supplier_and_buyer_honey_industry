import { sellerPostConsts } from "../actions/constants"

const initState = {
    sellerPosts: [],
    loading: false,
}

export default (state = initState, action) => {
    switch (action.type) {
        case sellerPostConsts.SELLER_POST_FETCH_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case sellerPostConsts.SELLER_POST_FETCH_SUCCESS:
            state = {
                ...state,
                sellerPosts: action.payload,
                loading: false
            }
            break
        case sellerPostConsts.SELLER_POST_FETCH_FAILED:
            state = {
                ...state,
                loading: false
            }
            break;
        case sellerPostConsts.SELLER_POST_STATUS_UPDATE_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case sellerPostConsts.SELLER_POST_STATUS_UPDATE_SUCCESS:
            state = {
                ...state,
                sellerPosts: action.payload,
                loading: false
            }
            break;
        case sellerPostConsts.SELLER_POST_STATUS_UPDATE_FAILED:
            state = {
                ...state,
                loading: false
            }
            break;
        case sellerPostConsts.SELLER_POST_DELETE_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case sellerPostConsts.SELLER_POST_DELETE_SUCCESS:
            state = {
                ...state,
                sellerPosts: action.payload,
                loading: false
            }
            break;
        case sellerPostConsts.SELLER_POST_DELETE_FAILED:
            state = {
                ...state,
                loading: false
            }
            break;
    }

    return state
}