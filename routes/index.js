const express = require('express');
const router = express.Router();
const Controller = require('../controllers/Controller');

// middleware that is specific to this router
// router.use((req, res, next) => {
//     console.log('Time: ', Date.now());
//     next();
// });

router.get('/ping', Controller.ping);
router.use('/call', require('./call'));

module.exports = router;