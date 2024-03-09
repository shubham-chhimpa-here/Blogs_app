const express = require('express');
const { userRouter } = require('./router/user.router');
require('dotenv').config()

const app = express()

const PORT = process.env.PORT;

app.use('/user' , userRouter)
app.get('/', (req, res) => {
    res.send({msg: 'home page'})
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})