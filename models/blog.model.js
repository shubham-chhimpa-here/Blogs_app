const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  views: {
    type: Number,
    default: 0
  },
  impressions: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: String,
    default: "0 0 0 0 0"
  },
})

const BlogModel = mongoose.model('blog', blogSchema)

module.exports = { BlogModel }