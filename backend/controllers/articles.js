const Articles = require('../models/articles');

exports.getAllArticles = (req, res, next) => {
    Articles.findOne({_id : req.params.id}).then(
       (article) => {
           res.status(200).json(article);
       }
    ).catch(
        (error) => {
            res.status(500).json({
                error : error
            });
        }
    );
}


exports.createArticles = (req, res, next) => {
    const articles = new Articles({
        userId : req.body.article.userId,
        department : req.body.department,
        picture : req.body.picture,
        content : req.body.content,
        imageUrl : req.body.imageUrl,
        created : new Date()
    });
    articles.save().then(
        () => {
            res.status(201).json({
                message: "Articles successfully created!"
            });
        }
    ).catch(
        () => {
            res.status(500).json({
                error : error
            });  
        }
    );
}
