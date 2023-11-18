const mongoose = require("mongoose")

const connection = async () =>{
    try{
        await mongoose.connect(`${process.env.LOCALDB}`)
        console.log("databse is connected")
    }catch(err){
        console.log(err)
    }
}

module.exports = connection;