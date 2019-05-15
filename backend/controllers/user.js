const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(
            (hash) => {
                const date = new Date();
                const user = new User({
                    lastName : req.body.lastName,
                    firstName : req.body.firstName,
                    email : req.body.email,
                    password : hash,
                    created : date,
                });
            user.save().then(
                () => {
                    res.status(201).json({
                        message: "User successfully added!",
                        user : user
                    });
                }
            ).catch(
                (error) => {
                    res.status(500).json({
                        error : error
                    });
                }
            );
        }
    );
};

exports.login = (req, res, next) => {
    User.findOne({email : req.body.email}).then(
        (user) => {
            if(!user){
                return res.status(401).json({
                    error :  new Error("User not found")
                });
            }
            bcrypt.compare(req.body.password, user.password).then(
                (valid) => {
                    if(!valid){
                        res.status(401).json({
                            error : new Error("Invalid password")
                        });
                    }
                    const token = jwt.sign(
                        {userId : user._id},
                        "RANDOM_TOKEN",
                        {expiresIn: '24h'})
                    res.status(201).json({
                        userId : user_id,
                        token : token
                    });
                }
            ).catch(
                (error) => {
                    res.status(500).json({
                        error : error
                    });
                }
            );
        }
    ).catch(
        (error) => {
            res.status(500).json({
                error : error
            });
        }
    );
}