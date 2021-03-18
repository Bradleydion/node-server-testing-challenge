const express = require('express')
const destinationsRouter = require('./destinations-router')

const server = express()

server.use(express.json())
server.use('./destinations', destinationsRouter)

server.get("/", (req, res, next)=>{
    res.json({
        message: "Well hello there"
    })
})
server.use ((err,req,res,next)=>{
    console.log(err)
    res.status(500).json({
        message: "Molly, you in danger girl"
    })
})
module.exports = server