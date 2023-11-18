const jwt = require("jsonwebtoken")
let CryptoJS = require("crypto-js");
const userModel = require("../models/user.model");
const createError = require("../utils/createError");

exports.registerUser = async (req, res, next) => {
    try {
        const user = await userModel.findOne({ email: req.body.email })

        if (user) return next(createError(403, "user alredy exists !"))

        var ciphertext = CryptoJS.AES.encrypt(req.body.password, process.env.PASSDEC).toString();

        const newUSer = new userModel({ ...req.body, password: ciphertext })

        const savedUSer = await newUSer.save()
        res.status(200).json(savedUSer)
    } catch (err) {
        next(err)
    }
}

    exports.loginUser = async (req, res, next) => {
        try {
            const user = await userModel.findOne({ email: req.body.email })

            if (!user) return next(createError(403, "user don't exits"))

            var bytes = CryptoJS.AES.decrypt(user.password, process.env.PASSDEC);
            var originalText = bytes.toString(CryptoJS.enc.Utf8);

            if(originalText !== req.body.password) return next(createError(403, "invalid credentials !"))

            const accesstoken = jwt.sign({id:user._id,isAdmin:user.isAdmin}, process.env.JWTKEY,{expiresIn:"1d"})

            const {password, ...others} = user._doc;

            res.status(200).json({...others,accesstoken})

        } catch (err) {
            next(err)
        }
    }

    exports.googleLogin = async (req,res,next) =>{
        try{
            const user = await userModel.findOne({email:req.body.email})

            if(user){
                const accesstoken = jwt.sign({id:req.user.id, isAdmin:req.user.isAdmin},process.env.JWTKEY, {expiresIn:"1d"})

                const {password, ...others} = user._doc;
                res.status(200).json({...others, accesstoken})
            }else{
                const newUser = new userModel(req.body)
                const savedUser = await newUser.save()
                const accesstoken = jwt.sign({id:savedUser._id, isAdmin:savedUser.isAdmin},process.env.JWTKEY,{expiresIn:"1d"})
                res.status(200).json({...savedUser, accesstoken})
            }
        }catch(err){  
            next(err)
        }
    }