//imports
var bcrypt =  require('bcrypt');
var jwtUtils = require('../utils/jwt.utils');
var models = require('../models');

//consts
const EMAIL_REGEX     = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX  = /^(?=.*\d).{4,8}$/;

//Routes
module.exports = {
    register: function(req,res) {
        //Params
        var email = req.body.email;
        var username = req.body.username;
        var password = req.body.password;
        var bio = req.body.bio;

        if (email == null || username == null || password == null){
            return res.status(400).json({ 'error': 'missing parameters'});
        }
        if(username.length >= 13 || username.length <= 4){
            return res.status(400).json({'error':'wrong username ( username length must be between 5 and 12 )'});
        }
        if(!EMAIL_REGEX.test(email)){
            return res.status(400).json({'error': 'email is not valid'});
        }
        if(!PASSWORD_REGEX.test(password)){
            return res.status(400).json({'error': 'password is not valid'});
        }
        //verify pseudo length, mail regex, password
        models.User.findOne({
            attributes: ['email'],
            where:{email: email}
        })
        .then(function(userFound){
            if(!userFound){

                bcrypt.hash(password, 5, function(err,bcryptedPassword){
                    var newUser = models.User.create({
                        email: email,
                        username: username,
                        password: bcryptedPassword,
                        bio: bio,
                        isAdmin: 0
                    })
                    .then(function(newUser){
                        return res.status(201).json({
                            'userId': newUser.id
                        })
                    })
                    .catch(function(err){
                        return res.status(500).json({'error': 'cannot add user'});
                    });
                });

            }else{
                return res.status(409).json({'error': 'user already exist'});
            }
        })
        .catch(function(error){
            return res.status(500).json({'error':'unable to verify user'});
        });
    },
    login: function(req,res) {
        //to implement
        var email    = req.body.email;
        var password = req.body.password;
        //conditions
        if (email == null ||  password == null) {
            return res.status(400).json({ 'error': 'missing parameters' });
        }
        
        //verify email regex password length
        models.User.findOne({
            where: {email: email}
        })
        .then(function(userFound){
            if (userFound){
                bcrypt.compare(password, userFound.password,function(errBycrypt, resBycrypt){
                    if(resBycrypt){
                        return res.status(200).json({
                            'userId': userFound.id,
                            'token': jwtUtils.generateTokenForUser(userFound)
                        });
                    }else{
                        return res.status(403).json({"error":"invalid password"});
                    }
                });
            }else{
                return res.status(404).json({'error':'user not exist in DB'});
            }

        })
        .catch(function(err){
            return res.status(500).json({'error':'unable to verify user'});
        });
    }
}