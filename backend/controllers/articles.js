const Articles = require('../models/articles');


exports.createArticles = (req, res, next) => {
    const url = req.protocol + '://' + req.get('host');
    if(req.file){
        const articles = new Articles({
            userId : req.body.userId,
            department : req.body.department,
            name : req.body.name,
            content : req.body.content,
            imageUrl: url + "/images/" + req.file.filename,
            created : new Date(),
            readBy : req.body.read
        });
            articles.save().then(
                () => {
                    res.status(201).json({
                        message: "Articles with images successfully created!"
                    });
                }
            ).catch(
                (error) => {

                        res.status(400).json({
                            error : error
                    });
                }
            );
        }else{
            const articles = new Articles({
                userId : req.body.userId,
                name : req.body.name,
                department : req.body.department,
                content : req.body.content,
                created : new Date(),
                read : req.body.read
        });
        articles.save().then(
            () => {
                res.status(201).json({
                    message: "Articles without images successfully created!"
                });
            }
        ).catch(
            () => {
                res.status(400).json({
                    error : error
                });  
            }
        );
    }
}

exports.getOneArticle = (req, res, next) => {
    Articles.findOne({
        _id : req.params.id
        
    }).then(
        (article) => {
            res.status(200).json(article)
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error : error
            });
        }
    );
}

exports.modifyReadPost = (req, res, next)=>{
    let articles = new Articles ({_id : req.params._id});
    articles = {
        read : req.body.read
    }
    Articles.updateOne({_id: req.params.id}, articles).then(
        () => {
            res.status(201).json({
                message : "Articles successfully updated!"
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error : error
            });
        }
    );
    
}


exports.getAllArticles = (req, res, next) => {
    Articles.find().then(
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
