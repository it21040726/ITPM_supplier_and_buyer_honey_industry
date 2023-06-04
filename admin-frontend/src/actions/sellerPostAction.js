import axiosInstance from "../helpers/axios"
import { sellerPostConsts } from "./constants"

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

export const setPostStatus = (form) => {
    return async dispatch => {
        dispatch({
            type: sellerPostConsts.SELLER_POST_STATUS_UPDATE_REQUEST
        })
        const res = await axiosInstance.post('/sellerposts/setPostStatus', form)
        if (res.status === 201){
            dispatch({
                type: sellerPostConsts.SELLER_POST_STATUS_UPDATE_SUCCESS,
                payload: res.data.payload
            })
        }
        else{
            dispatch({
                type: sellerPostConsts.SELLER_POST_STATUS_UPDATE_FAILED
            })
        }
    }
}

export const deleteSellerPost = (form) => {
    return async dispatch => {
        dispatch({
            type: sellerPostConsts.SELLER_POST_DELETE_REQUEST
        })
        const res = await axiosInstance.post('/sellerposts/deleteSellerPost', form)
        if (res.status === 201){
            dispatch({
                type: sellerPostConsts.SELLER_POST_DELETE_SUCCESS,
                payload: res.data.payload
            })
        }
        else{
            dispatch({
                type: sellerPostConsts.SELLER_POST_DELETE_FAILED
            })
        }
    }
}