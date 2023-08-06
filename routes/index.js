const express = require('express');

const router = express.Router();


const userController = require('../controllers/userController');

router.get('/',userController.home);
 
router.get('/sign-up',userController.signup);

router.get('/user-details',userController.dashboard);

router.post('/create',userController.create);

router.get('/login',userController.login);

module.exports = router;
