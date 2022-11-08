const express = require('express')
const routerPosts = express.Router()

const { getPosts, showPost, deletePost, createPost,  } = require('../controllers/posts')

// Rutas de INDEX
routerPosts.get('/posts', getPosts)
routerPosts.get('/posts/:slug', showPost)
routerPosts.delete('/posts/:id', deletePost)
routerPosts.get('/posts/new', createPost)

module.exports = {
    routerPosts
}