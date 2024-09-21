const express = require('express');
const router = express.Router();
const orts = require('../controller/ortscontroller.js');

router.get('/', orts.index);
router.get('/about', orts.about);
router.get('/create', orts.create);
router.get('/home', orts.home);
router.get('/update', orts.update);

module.exports = router;