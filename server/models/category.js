import mongoose from "mongoose";

const Category = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    slug: {
        type: String,
        required: true,
        unique: true
    },

    catImg: {
        type: String
    },

    parentId: {
        type: String
    },

    updatedAt: Date,
    createdAt: Date
},{timestamps: true})

export default mongoose.model("Categories", Category)