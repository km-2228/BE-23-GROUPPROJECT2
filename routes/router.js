const express = require('express');
const router = express.Router();
const partner = require('./partnerRouter')

router.use('/partners', partner)

module.exports = router;