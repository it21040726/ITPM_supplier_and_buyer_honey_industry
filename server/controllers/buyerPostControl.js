import BuyerPosts from '../models/buyer.js'
export const getAllBuyerPosts = async (req, res) => {
    const buyerPosts = await BuyerPosts.find({})
    res.status(200).json({
        message: "All Buyer Posts fetch successfully",
        payload: buyerPosts
    })
}

export const setPostStatus = async (req, res) => {
    console.log(req.body)
    const { id, status } = req.body
    const post = {
        postStatus: status
    }
    const buyerPost = await BuyerPosts.findOneAndUpdate({ _id: id }, post, { new: true })
    if (buyerPost) {
        const buyerPosts = await BuyerPosts.find({})
        res.status(201).json({
            message: "Status updated successfully",
            payload: buyerPosts
        })
    }
    else {
        res.status(400).json({
            message: "Status update failed"
        })
    }
}

export const deleteBuyerPost = async (req, res) => {
    const { id } = req.body
    const deletePost = await BuyerPosts.findOneAndDelete({ _id: id })
    const buyerPosts = await BuyerPosts.find({})
    res.status(201).json({
        message: "Post deleted successfully",
        payload: buyerPosts
    })
}