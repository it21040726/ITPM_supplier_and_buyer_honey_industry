import mongoose from "mongoose";
const schema = mongoose.Schema;

const Buyer = new schema({
    buyerId : {
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
        type : Number,
        required : true
    },

    publishedDate:{
        type : Date,
        required : true
    },

    targetPrice : {
        type: Number,
        required : true
    },

    quantityRequired : {
        type : Number,
        required : true
    },

    paymentTerms : {
        type : String,
        required : true
    },

    destination : {
        type : String,
        required : true
    },
    suppliersFrom :{
        type: String,
        required : true
    }, 
    postStatus : {
        type : String,
        required : true
    }
});

export default mongoose.model("BuyerPostDetail", Buyer);


