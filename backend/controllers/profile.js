const Profile = require('../models/profile');

exports.confirmProfile = (req, res, next) => {
    const profile = new Profile({
        birthday : req.body.birthday
    });
    profile.save().then(
        () => {
            res.status(201).json({
                message: "Profile successfully added!",
                profile: profile
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