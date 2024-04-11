const express = require('express')
const { BlogModel } = require('../models/blog.model')
const blogRouter = express.Router()


blogRouter.get('/' ,async (req, res) => {
    const data = await BlogModel.find()
    res.send({data})
})

blogRouter.post('/add', async (req, res) => {
    const data = new BlogModel(req.body)
    await data.save()
    res.send({msg: 'added ',data})

})

module.exports = {blogRouter}