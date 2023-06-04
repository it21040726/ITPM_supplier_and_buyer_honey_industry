import axiosInstance from "../helpers/axios"
import { catConsts } from "./constants"
export const getAllCategories = () => {
    return async dispatch => {
        dispatch({ type: catConsts.CATEGORY_FETCH_REQUEST })
        const res = await axiosInstance.get('categories/getcategory')

        if (res.status === 200) {

            const catList = res.data.catList
            dispatch({
                type: catConsts.CATEGORY_FETCH_SUCCESS,
                payload: { categories: catList }
            })
        }

        else {
            dispatch({
                type: catConsts.CATEGORY_FETCH_FAILED,
                payload: { error: res.data.error }
            })
        }
    }
}