const { validationResult } = require('express-validator');
const db = require('../models')
const partner = db.partners;

const readPartner = async (req, res) => {
  try {
    const response = await partner.findAll()
    res.status(200).json({
      message: "get all data success",
      total: response.length,
      data: response,
    })
  }
  catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

const createPartner = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: errors.array()
      })
    }

    const created = await partner.create(req.body)
    res.status(201).json({
      message: "add data partner success",
      user: created,
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}


const getPartnerById = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: errors.array()
      })
    }

    const response = await partner.findOne({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json({
      message: "get data by id success",
      data: response,
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}


const updatePartner = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: errors.array()
      })
    }

    const updated = await partner.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (!updated) throw new Error('data partner not updated!')
    const response = await partner.findOne({
      where: {
        id: req.params.id
      }
    })

    res.status(200).json({
      updated: response,
      message: " data partner updated"
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

const deletePartner = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: errors.array()
      })
    }

    const deleted = await partner.destroy({
      where: {
        id: req.params.id
      }
    })

    if (!deleted) throw new Error('data partner not deleted!')

    res.status(200).json({
      deleted: {
        id: req.params.id
      },
      message: " data partner deleted"
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}


module.exports = {
  readPartner,
  createPartner,
  updatePartner,
  deletePartner,
  getPartnerById
}