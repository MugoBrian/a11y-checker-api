const express = require('express');
const { pa11yCodeController } = require('../controllers/Pa11yController');
const { pa11yUrlController } = require('../controllers/Pa11yController');

const router = express.Router();
// Yeah buddy
router.post('/code',pa11yCodeController);
router.post('/url',pa11yUrlController);

module.exports = router;
