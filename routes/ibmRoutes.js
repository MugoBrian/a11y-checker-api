const express = require('express');
const { ibmUrlController } = require('../controllers/IBMController');
const { ibmCodeController } = require('../controllers/IBMController');
const router = express.Router();

router.post('/url',ibmUrlController);
router.post('/code',ibmCodeController);

module.exports = router;