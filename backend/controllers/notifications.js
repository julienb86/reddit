const Notifications = require('../models/notifications');

exports.createNotifications = (req, res, next) =>{
    const notifications = new Notifications({
        userId : req.body.userId,
        departmentId: req.body.departmentId,
        articleId : req.body.articleId,
        read : req.body.read
    });
    notifications.save().then(
        () => {
            res.status(201).json({
                message: "Notification successfully created!"
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


exports.modifyNotification = (req, res, next)=>{
    let notifications = new Notifications({
        userId : req.body.userId,
        departmentId: req.body.departmentId,
        articleId : req.body.articleId,
        read : req.body.read
    });
    Notifications.updateOne({_id: req.params.id}, notifications).then(
        () => {
            res.status(201).json({
                message : "Notifications successfully updated!"
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


exports.getNotifications = (req, res, next) => {
    Notifications.find().then(
       (notification) => {
           res.status(200).json(notification);
       }
    ).catch(
        (error) => {
            res.status(500).json({
                error : error
            });
        }
    );
}