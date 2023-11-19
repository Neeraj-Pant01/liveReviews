const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    image:{
        type:[String],
        required:false
    },
    likes:{
        type:[String],
        default:[]
    },
    stars:{
        type:Number,
        default:1,
        min:1,
        max:5
    }
},{timestamps:true})

module.exports = mongoose.model('reviews', reviewSchema)
