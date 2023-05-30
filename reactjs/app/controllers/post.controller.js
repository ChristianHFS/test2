const db = require('../models')

const Post = db.posts

exports.findAll = (req, res) => {
    Post.find()
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Error when retrieving posts"
        })
    });
    
}

exports.create = (req, res) => {
    const post = new Post({
        title: req.body.title,
        body: req.body.body,
        published: req.body.published ? req.body.published : false
    })

    post.save(post)
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Error while create posts"
        })
    });
}

exports.findone = (req, res) => {
    const id = req.params.id

    Post.findById(id)
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Error while show posts"
        })
    });
}

exports.update = (req, res) => {
    const id = req.params.id

    Post.findByIdAndUpdate(id, req.body)
    .then((result) => {
        if(!result) {
            res.status(404).send({
                message: "Post not found"
        })
    }

    res.send({
        message: "Post was update"
    })

    }).catch((err) => {
    res.status(409).send({
        message: err.message || "Error while update posts"
        })
    });
}

exports.delete = (req, res) => {
    const id = req.params.id

    Post.findByIdAndRemove(id)
    .then((result) => {
        if (!result) {
            res.status(404).send({
                message: "Post not Found"
            })
        }
        res.send({
            message: "Post was Delete"
        })
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Error while delete posts"
        })
    })
}