const express = require('express');
const router = express.Router()
const partnerController = require('../controllers/partnerController')

router.get('/all-partner', partnerController.readPartner)
router.get('/all-partner/:id', partnerController.getPartnerById)
router.post('/all-partner', partnerController.createPartner)
router.patch('/all-partner/:id', partnerController.updatePartner)
router.delete('/all-partner/:id', partnerController.deletePartner)


module.exports = router;