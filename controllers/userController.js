const db = require('../models')
const User = db.user
const Role = db.role

const allAccess = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: { exclude: ['password'] }
        })
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving data."
        });
    }
}

const userBoard = async (req, res) => {
    try {
        const users = await User.findAll({
            include: [{
                model: Role,
                where: {
                    name: "user"
                },
                attributes: []
            }],
            attributes: { exclude: ['password'] }
        })
        res.status(200).send(users)
    }
    catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving data."
        });
    }
}

const adminBoard = async (req, res) => {
    try {
        const users = await User.findAll({
            include: [{
                model: Role,
                where: {
                    name: "admin"
                },
                attributes: []
            }],
            attributes: { exclude: ['password'] }
        })
        res.status(200).send(users)
    }
    catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving data."
        });
    }
}

const moderatorBoard = async (req, res) => {
    try {
        const users = await User.findAll({
            include: [{
                model: Role,
                where: {
                    name: "moderator"
                },
                attributes: []
            }],
            attributes: { exclude: ['password'] }
        })
        res.status(200).send(users)
    }
    catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving data."
        });
    }
}

module.exports = {
    allAccess,
    userBoard,
    adminBoard,
    moderatorBoard
}