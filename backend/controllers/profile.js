const Profile = require('../models/profile');

exports.confirmProfile = (req, res, next) => {
    const profile = new Profile({
        department : req.body.department,
        birthday : req.body.birthday
    });
    profile.save().then(
        () => {
            res.status(201).json({
                message: "Profile successfully added!"
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