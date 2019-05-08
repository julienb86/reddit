const Post = require('../models/posts');

exports.getAllPosts = (req, res, next) => {
    Post.find().then(
        (posts) => {
            res.status(200).json(posts);
            console.log(posts);
            
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error : error
            });
        }
    );
}