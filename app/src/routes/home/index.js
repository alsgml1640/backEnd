const express = require('express');
const router = express.Router();

// 넘겨받기 
const ctrl = require('./home.ctrl');

router.get('/', ctrl.home);
router.get('/login',ctrl.login);

module.exports = router;