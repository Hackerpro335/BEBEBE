const express = require('express');
const router = express.Router();

const registrationRoutes = require('./reg');
const loginRoutes = require('./login');
const homeRoutes = require('./home');

router.use('/reg', registrationRoutes);
router.use('/login', loginRoutes);
router.use('/', homeRoutes);

module.exports = router;