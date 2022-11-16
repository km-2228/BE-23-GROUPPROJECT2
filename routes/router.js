const express = require('express');
const router = express.Router();
const partner = require('./partnerRouter')
const api = require('./authRouter')
const dashboard = require('./userRouter')


router.use('/partners', partner)
router.use('/dashboard', dashboard)
router.use('/api', api)
module.exports = router;