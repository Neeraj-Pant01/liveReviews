const reviewModel = require("../models/review.model")
const createError = require("../utils/createError")

exports.addReview = async (req,res,next) =>{
    try{
        const newReview = new reviewModel({userId:req.user.id, ...req.body})
        const savedReview = await newReview.save();
        res.status(200).json(savedReview)
    }catch(err){
        next(err)
    }
}


exports.getAreview = async (req,res,next) =>{
    try{
        const review = await reviewModel.findById(req.params.id)
        if(!review) return next(createError(404,"user not found !"))
        res.status(200).json(review)
    }catch(err){
        next(err)
    }
}


exports.getAProductsReview = async (req,res,next) =>{
    const q = req.query;
    try{
        const reviews = await reviewModel.find({title : {$regex: q.search, $options:"i"}})
        res.status(200).json(reviews)
    }catch(err){
        next(err)
    }
}

exports.likeReview = async (req,res,next) =>{
    try{
        await reviewModel.findByIdAndUpdate(req.params.id, {
            $addToSet: {likes: req.user.id}
        })
        res.status(200).json({
            message:"like added !"
        })
    }catch(err){
        
        next(err)
    }
}
