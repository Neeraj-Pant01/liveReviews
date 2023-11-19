const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors")
const connection = require("./db/connection")
const authroute = require("./routes/auth.route")
const userRoute = require("./routes/user.routes")
const reviewRoute = require("./routes/reviews.route")

const app = express()
app.use(express.json())
app.use(cors())

app.use((err,req,res,next) =>{
    const errStatus = err.status || 500;
    const errMessage = err.message || "internal server error"

    return res.status(errStatus).send(errMessage)
})

app.use('/api/v1/auth', authroute)
app.use('/api/v1/users',userRoute)
app.use('/api/v1/reviews',reviewRoute)

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    connection()
    console.log("server is running at the port ,", PORT)
})