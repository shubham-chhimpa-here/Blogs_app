const express = require('express');
const { userRouter } = require('./router/user.router');
const { connection } = require('./db');
const { blogRouter } = require('./router/blog.router');
const cors = require('cors');
const { logger } = require('./middlewares/logger');
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 8080;
const allowedOrigins = process.env.allowedOrigins;

app.use(express.json())
app.use(cors())
// app.use(logger)
app.use((req, res, next) => {
    const origin = req.headers.origin;
    console.log(origin, allowedOrigins)
    
    if (allowedOrigins === origin) {
        // res.setHeader('Access-Control-Allow-Origin', origin);
    next();
    }
    else {
    res.send({msg: 'not authorized'})
    }
    // // other CORS headers...
});
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
