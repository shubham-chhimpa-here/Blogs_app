const express = require('express')
const userRouter = express.Router()

userRouter.get('/', (req, res) => {
    res.send({msg: 'user router'})
})

module.exports = {userRouter}