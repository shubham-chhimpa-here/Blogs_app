const express = require('express')

const app = express()

const PORT = 8080;

app.get('/', (req, res) => {
    res.send({msg: 'home page'})
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})