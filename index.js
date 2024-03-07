const express = require('express')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT;


app.get('/', (req, res) => {
    res.send({msg: 'home page'})
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})