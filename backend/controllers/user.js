const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

exports.getOneUser = (req, res, next) => {
    User.findOne({_id : req.params.id}).then(
        (user) => {
            res.status(200).json(user);
        }
    ).catch(
        (error) => {
            res.status(500).json({
                error : error
            });
        }
    );
}


exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(
            (hash) => {
                const user = new User({
                    name : req.body.name,
                    email : req.body.email,
                    birthday : req.body.birthday,
                    department : req.body.department,
                    password : hash
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
                    res.status(200).json({
                        userId : user._id,
                        token : token, 
                        user: user
                        
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


exports.deleteAccount = (req, res, next)=>{
    User.deleteOne({_id : req.params.id}).then(
        () => {
            res.status(200).json({
                message : "User account deleted successfully!"
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