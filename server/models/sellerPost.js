import mongoose from "mongoose";

const SellerPost = new mongoose.Schema({
    sellerId : {
        type : String,
        required : true
    },

    postTitle : {
        type : String,
        required : true
    },
    
    description : {
        type : String,
        required: true
    },

    mobileNo : {
        type : String,
        required : true
    },

    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Categories', required: true},

    price : {
        type : Number,
        required : true
    },  

    stock : {
        type : Number,
        required : true
    },

    productPics : [
        {img: {type: String}}
    ],

    postStatus : {
        type : String,
        required : true
    },

    updatedAt: Date,
    createdAt: Date
},{timestamps: true})

export default mongoose.model("SellerPostDetail", SellerPost)   