import axiosInstance from "../helpers/axios"
import { buyerPostConsts } from "./constants"

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

export const setPostStatus = (form) => {
    return async dispatch => {
        dispatch({
            type: buyerPostConsts.BUYER_POST_STATUS_UPDATE_REQUEST
        })
        const res = await axiosInstance.post('/buyerposts/setPostStatus', form)
        if (res.status === 201){
            dispatch({
                type: buyerPostConsts.BUYER_POST_STATUS_UPDATE_SUCCESS,
                payload: res.data.payload
            })
        }
        else{
            dispatch({
                type: buyerPostConsts.BUYER_POST_STATUS_UPDATE_FAILED
            })
        }
    }
}

export const deleteBuyerPost = (form) => {
    return async dispatch => {
        dispatch({
            type: buyerPostConsts.BUYER_POST_DELETE_REQUEST
        })

        const res = await axiosInstance.post('/buyerposts/deleteBuyerPost', form)
        if (res.status === 201){
            dispatch({
                type: buyerPostConsts.BUYER_POST_DELETE_SUCCESS,
                payload: res.data.payload
            })
        }
        else{
            dispatch({
                type: buyerPostConsts.BUYER_POST_DELETE_FAILED
            })
        }
    }
}