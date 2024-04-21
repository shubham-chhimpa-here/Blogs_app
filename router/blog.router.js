const express = require('express')
const { BlogModel } = require('../models/blog.model')
const blogRouter = express.Router()


blogRouter.get('/', (req, res) => {
    BlogModel.find()
        .then(posts => {

            res.send(posts)
        })
        .catch(err => {

            res.send(err)
        });


})

blogRouter.get('/:id', (req, res) => {
    const { id } = req.params
    BlogModel.findByIdAndUpdate(id, { $inc: { views: 1 } }, { new: true })
        .then(post => {

            res.send(post)
        })
        .catch(err => {

            res.send(err)
        })

})

blogRouter.post('/add', async (req, res) => {

    const data = new BlogModel(req.body)
    try {
        await data.save()
        res.send({ msg: 'added ', data })

    } catch (error) {
        res.send({ msg: 'something went wrong' })
    }

})

blogRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await BlogModel.findByIdAndDelete(id)
    res.send({ msg: 'post deleted succesfully' })
})

module.exports = { blogRouter }