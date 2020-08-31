const express = require('express');
const router = express.Router();
const CallController = require('../controllers/CallController');
const CallRequest = require('../requests/CallRequest');

router.post('/', CallRequest.validate('store'), CallController.store)
router.get('/', CallController.getAll)
router.get('/:id', CallController.getSingle)
router.put('/:id', CallController.update)

module.exports = router;