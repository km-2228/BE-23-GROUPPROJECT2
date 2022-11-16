const JWT = require('jsonwebtoken');
const config = require('../config/authConfig');
const db = require('../models');
const User = db.user;

const verifyToken = (req, res, next) => {
    let token = req.headers["access-token"];

    if(!token){
        return res.status(403).send({
            message:"no token provided"
        });
    }

    JWT.verify(token,config.secret,(err,decoded) => {
        if(err){
            return res.status(401).send({
                message:"unauthorized!"
            });
        }
        req.userId = decoded.id;
        next()
    })
}

const isAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for(let i = 0; i < roles.length; i++){
                if(roles[i].name === "admin"){
                    next();
                    return;
                }
            }

            res.status(403).send({
                message: "Require Admin Role!"
              });
              return;
        
        })
    })
}

module.exports = {
    verifyToken,
    isAdmin
}