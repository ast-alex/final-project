const { response } = require('express')
const Post = require('../models/posts')

// index
const getPosts = async (req, res = response) => {
    
    try {
        const posts = await Post.find({}).lean() // Me deja un objeto puro de JS    
        //console.log(posts)
        const title = "InfoBlog - Listado de Post"
        res.status(200).render('index',
            {
                title,
                posts
            }
        )
    } catch (error) {
        console.log('Error Index', error)
    }
}

// show

const showPost = async (req, res = response) =>{
    try {
        const post = await Post.findOne({ slug: req.params.slug }).lean()
        if (post === null) return res.redirect('/')

        res.render('show', {
            title: `InfoBlog - ${post.title}`,
            post,
        })

    } catch (error) {
        console.log('Error Show', error)
    }
    
}

/// DELETE

const deletePost = async (req, res = response) =>{
    try {
        
        await Post.findByIdAndDelete(req.params.id)
        
        res.redirect('/posts')
        
    } catch (error) {
        console.log('Error Delete', error)
    }
}


/// CREATE
const createPost = (req, res = response) =>{
    res.render('new')
}

module.exports = {
    getPosts,
    showPost,
    deletePost,
    createPost
}