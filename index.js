const express = require('express');
const { userRouter } = require('./router/user.router');
const { connection } = require('./db');
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 8080;

app.use(express.json())

app.use('/user', userRouter)
app.get('/', (req, res) => {
    res.send({ msg: 'home page' })
})
 
app.listen(PORT, async () => {
    try {
        await connection
        console.log('conneted to database')
    } catch (error) {
        console.log('something went wrong')
    }
    console.log(`server is running on port ${PORT}`)
})