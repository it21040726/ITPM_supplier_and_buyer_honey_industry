import express from "express"
import { deleteSellerPost, getAllSellerPosts, setPostStatus } from "../controllers/sellerPostControl.js"

const router = express.Router()

router.get("/sellerposts/getAllSellerPosts", getAllSellerPosts)
router.post("/sellerposts/setPostStatus", setPostStatus)
router.post("/sellerposts/deleteSellerPost", deleteSellerPost)

export default router