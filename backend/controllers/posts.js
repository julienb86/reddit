const Post = require('../models/posts');



/* exports.postArticle = (req, res, next) => {
    
} */





exports.getAllPosts = (req, res, next) => {
    Post.find().then(
        (posts) => {
            res.status(200).json(posts);            
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error : error
            });
        }
    );
}

