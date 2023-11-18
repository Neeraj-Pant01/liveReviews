const router = require("express").Router();
const verifyToken = require("../middleware/verifyToken");
const userModel = require("../models/user.model")
let CryptoJS = require("crypto-js");

//get your profile
router.get('/',verifyToken, async (req,res,next) =>{
    try{
        const user = await userModel.findById(req.user.id)
        res.status(200).json(user)
    }catch(err){
        next(err)
    }
})

//update account
router.put('/',verifyToken, async (req,res,next) =>{
    try{
        const user = await userModel.findById(req.user.id)
        if(req.body.password){
            var ciphertext = CryptoJS.AES.encrypt(req.body.password, process.env.PASSDEC).toString();

            const updatedUser = await userModel.findByIdAndUpdate(req.user.id, {
                $set: { ...req.body, password: ciphertext, }
            },{
                new: true
            })
        res.status(200).json(updatedUser)
        }else{
            const updatedUser = await userModel.findByIdAndUpdate(req.user.id, {
                $set: req.body
            },{
                new: true
            })  
        res.status(200).json(updatedUser)
        }
    }catch(err){
        next(err)
    }
})

module.exports = router;



