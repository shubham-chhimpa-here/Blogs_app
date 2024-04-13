const express = require('express')
const { BlogModel } = require('../models/blog.model')
const blogRouter = express.Router()


blogRouter.get('/', (req, res) => {
    BlogModel.find()
        .then(posts => {
            // Iterate through each post and update the impressions field
            const updatePromises = posts.map(post => {
                return BlogModel.findByIdAndUpdate(post._id, { $inc: { impressions: 1 } }, { new: true });
            });

            // Wait for all update operations to complete
            return Promise.all(updatePromises);
        })
        .then(updatedPosts => {

            res.send(updatedPosts)
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
    await data.save()
    res.send({ msg: 'added ', data })

})

blogRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await BlogModel.findByIdAndDelete(id)
    res.send({ msg: 'post deleted succesfully' })
})

module.exports = { blogRouter }