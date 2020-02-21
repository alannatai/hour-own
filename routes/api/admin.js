const express = require('express');
const router = express.Router();
const adminController = require('../../controllers/adminController');

router.post('/resetDay', adminController.resetDay);

module.exports = router;
