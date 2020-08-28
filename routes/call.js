const express = require('express');
const router = express.Router();
const CallController = require('../controllers/CallController');

router.post('/', CallController.store)
router.get('/', CallController.get)

module.exports = router;