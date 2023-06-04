import e from "express";
import sellerPost from "../models/sellerPost.js";

export const getAllSellerPosts = async (req, res) => {
    const sellerPosts = await sellerPost.find({})
    res.status(200).json({
        message: "All Seller Posts fetch successfully",
        payload: sellerPosts
    })
}

export const setPostStatus = async (req, res) => {
    const { id, status } = req.body
    const post = {
        postStatus: status
    }
    const sellerPost = await sellerPost.findOneAndUpdate({ _id: id }, post, { new: true })
    if (sellerPost) {
        const sellerPosts = await sellerPost.find({})
        res.status(201).json({
            message: "Status updated successfully",
            payload: sellerPosts
        })
    }
    else {
        res.status(400).json({
            message: "Status update failed"
        })
    }
}
export const deleteSellerPost = async (req, res) => {
    const { id } = req.body
    const deletePost = await sellerPost.findOneAndDelete({ _id: id })
    const sellerPosts = await sellerPost.find({})
    res.status(201).json({
        message: "Post deleted successfully",
        payload: sellerPosts
    })
}