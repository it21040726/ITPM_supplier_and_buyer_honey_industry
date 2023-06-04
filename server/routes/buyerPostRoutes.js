import express from "express";
import { deleteBuyerPost, getAllBuyerPosts, setPostStatus } from "../controllers/buyerPostControl.js";

const router = express.Router();

router.get("/buyerposts/getAllBuyerPosts", getAllBuyerPosts);
router.post("/buyerposts/setPostStatus", setPostStatus);
router.post("/buyerposts/deleteBuyerPost", deleteBuyerPost);

export default router