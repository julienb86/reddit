const Department = require('../models/department');

exports.createDepartment = (req, res, next) => {
    const url = req.protocol + '://' + req.get('host');
    if(req.file){
        const department = new Department({
            name : req.body.name,
            posts : {
                userId : req.body.userId,
                department : req.body.department,
                name : req.body.name,
                content : req.body.content,
                imageUrl: url + "/images/" + req.file.filename,
                created : new Date()
            }

        });
            department.save().then(
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
            const department = new Department({
                name : req.body.name,
                posts : {
                    userId : req.body.userId,
                    department : req.body.department,
                    name : req.body.name,
                    content : req.body.content,
                    imageUrl: url + "/images/" + req.file.filename,
                    created : new Date()
                }
        });
        department.save().then(
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

exports.getAllDepartment = (req, res, next) => {
    Department.find().then(
       (depart) => {
           res.status(200).json(depart);
       }
    ).catch(
        (error) => {
            res.status(500).json({
                error : error
            });
        }
    );
}