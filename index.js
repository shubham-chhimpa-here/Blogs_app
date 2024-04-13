const express = require('express');
const { userRouter } = require('./router/user.router');
const { connection } = require('./db');
const { blogRouter } = require('./router/blog.router');
const cors = require('cors');
const { logger } = require('./middlewares/logger');
const { adminRouter } = require('./router/admin.router');
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 8080;

app.use(express.json())
app.use(cors())
app.use('/admin', adminRouter)
app.use(logger)
app.use('/user', userRouter)
app.use('/blog', blogRouter)

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