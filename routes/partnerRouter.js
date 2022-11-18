const express = require('express');
const { body, param } = require('express-validator');
const router = express.Router()
const partnerController = require('../controllers/partnerController')

router.get(
  '/all-partner',
  partnerController.readPartner,
)

router.get(
  '/all-partner/:id',
  param('id').isInt().withMessage('id must be an integer'),
  partnerController.getPartnerById,
)

router.post(
  '/all-partner', [
  body('id').notEmpty().isInt().withMessage('id is required'),
  body('nama').notEmpty().withMessage('nama is required'),
  body('pengalaman').notEmpty().withMessage('pengalaman is required'),
  body('pendidikan').notEmpty().withMessage('pendidikan is required'),
  body('jenis_kelamin').notEmpty().withMessage('jenis_kelamin is required'),
  body('asal_kota').notEmpty().withMessage('asal_kota is required'),
  body('rating').notEmpty().withMessage('rating is required'),
  body('deskripsi').notEmpty().withMessage('deskripsi is required'),
],
  partnerController.createPartner,
)

router.patch(
  '/all-partner/:id',
  param('id').isInt().withMessage('id must be an integer'),
  partnerController.updatePartner,
)

router.delete(
  '/all-partner/:id',
  param('id').isInt().withMessage('id must be an integer'),
  partnerController.deletePartner,
)

module.exports = router;