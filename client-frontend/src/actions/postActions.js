import axiosInstance from "../helpers/axios"
import { sellerPostConsts, buyerPostConsts } from "./constants"

export const getAllSellerPosts = () => {
    return async dispatch => {
        dispatch({ type: sellerPostConsts.SELLER_POST_FETCH_REQUEST })
        const res = await axiosInstance.get('/sellerposts/getAllSellerPosts')
        if(res.status === 200){
            dispatch({
                type: sellerPostConsts.SELLER_POST_FETCH_SUCCESS,
                payload: res.data.payload
            })
        }
        else{
            dispatch({
                type: sellerPostConsts.SELLER_POST_FETCH_FAILED
            })
        }
    }
}
export const getAllBuyerPosts = () => {
    return async dispatch => {
        dispatch({ type: buyerPostConsts.BUYER_POST_FETCH_REQUEST })
        const res = await axiosInstance.get('/buyerposts/getAllBuyerPosts')
        if(res.status === 200){
            dispatch({
                type: buyerPostConsts.BUYER_POST_FETCH_SUCCESS,
                payload: res.data.payload
            })
        }
        else{
            dispatch({
                type: buyerPostConsts.BUYER_POST_FETCH_FAILED
            })
        }
    }
}