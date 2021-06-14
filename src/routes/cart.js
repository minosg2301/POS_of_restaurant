const express = require('express')
const router = express.Router()

const cartController = require('../app/controllers/CartController')
const authController = require('../app/middlewares/auth');
router.get('/', authController.isLoggedIn,cartController.index);

module.exports = router